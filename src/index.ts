import moment from 'moment';
import { Request, Response } from 'express';
import fs from "fs";
import { cwd } from "process";
import { Environments } from "./enums/environments";
import { get, postWithConfig } from './request';

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";
const GENERAL_DATA_ERR = '{"message": "Unable to load data - query FHIR resource error."}';

type BlueButtonJsonConfig = {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version?: string;
  pkce?: boolean;
  retryConfig?: RetryConfig;
  environment?: Environments;
};

export type RetryConfig = {
    enabled: boolean;
    initInterval: number;
    maxAttempts: number;
    backOffExpr: string;
    endpointPattern: string;
  };
  
export interface IAuthorizationToken {
  accessToken: string,
  expiresIn: number,
  tokenType: string,
  scope: [string],
  refreshToken: string,
  patient: string,
  expiresAt: number
}

export class AuthorizationToken implements IAuthorizationToken {
  public accessToken: string;
  public expiresIn: number;
  public expiresAt: number;
  public tokenType: string;
  public scope: [string];
  public refreshToken: string;
  public patient: string;
  
  constructor(authToken: any) {
    this.accessToken = authToken.access_token;
    this.expiresIn = authToken.expires_in;
    this.expiresAt = authToken.expires_at ? authToken.expires_at : moment().add(this.expiresIn).valueOf();
    this.patient = authToken.patient;
    this.refreshToken = authToken.refresh_token;
    this.scope = authToken.scope;
    this.tokenType = authToken.token_type;
  }
}
    
export interface IUser {
  authToken?: AuthorizationToken,
  userInfo: any,
  fhirData?: Map<string, any>,
  errors?: Map<string, any>,
  accessTokenExpired(): boolean,
  setData(data: any): void,
  getData(): any,
  getErrors(): any,
  setErrors(errors: any): void,
  getAuthorizationToken(): AuthorizationToken | undefined,
  setAuthorizationToken(authToken: AuthorizationToken): void,
  reset(): void,
}
  
export interface IAppContext {
  getUser(): IUser,
  getBlueButton(): BlueButton,
  doneAuthorize(res: Response): void,
  doneFhirResource(fhirReq: FhirRequest, data: any): void,
}

type BlueButtonConfig = string | BlueButtonJsonConfig;

export enum FhirResourceType {
  Patient = "Patient",
  Coverage = "Coverage",
  Profile = "Profile",
  ExplanationOfBenefit = "ExplanationOfBenefit",
}
  
export class FhirRequest {
  private fhirResourceType: FhirResourceType;
  private request: Request;
  private response: Response;
  private appCtx: IAppContext;

  constructor(fhirResourceType: FhirResourceType, req: Request, res: Response, ctx: IAppContext) {
    this.fhirResourceType = fhirResourceType;
    this.request = req;
    this.response = res;
    this.appCtx = ctx;
  }

  getRequest(): Request {
    return this.request;
  }

  getResponse(): Response {
    return this.response;
  }

  getAppContext(): IAppContext {
    return this.appCtx;
  }

  getFhirResourceType(): FhirResourceType {
      return this.fhirResourceType;
  }
}

export default class BlueButton {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version: string;
  pkce: boolean;
  baseUrl: string;
  retryConfig?: RetryConfig;
  readonly BB2_PATIENT_URL;
  readonly BB2_COVERAGE_URL;
  readonly BB2_EOB_URL;
  readonly BB2_AUTH_REQ_URL;
  readonly BB2_AUTH_TOKEN_URL;

  constructor(config?: BlueButtonConfig) {
    let bbJsonConfig;
    if (!config) {
      try {
        const rawdata = fs.readFileSync(DEFAULT_CONFIG_FILE_LOCATION);
        const jsonConfig = JSON.parse(rawdata.toString());
        bbJsonConfig = this.normalizeConfig(jsonConfig);
      } catch (e) {
        throw new Error(
          `Failed to load config file at: ${DEFAULT_CONFIG_FILE_LOCATION}`
        );
      }
    } else if (typeof config === "string") {
      try {
        const rawdata = fs.readFileSync(config);
        const jsonConfig = JSON.parse(rawdata.toString());
        bbJsonConfig = this.normalizeConfig(jsonConfig);
      } catch (e) {
        throw new Error(`Failed to load config file at: ${config}`);
      }
    } else {
      bbJsonConfig = this.normalizeConfig(config);
    }

    if (!bbJsonConfig.clientId) {
      throw new Error("clientId is required");
    }

    if (!bbJsonConfig.clientSecret) {
      throw new Error("clientSecret is required");
    }

    // if (!bbJsonConfig.callbackUrl) {
    //   throw new Error("callbackUrl is required");
    // }

    this.baseUrl = bbJsonConfig.baseUrl;
    this.clientId = bbJsonConfig.clientId;
    this.callbackUrl = bbJsonConfig.callbackUrl;
    this.clientSecret = bbJsonConfig.clientSecret;
    this.callbackUrl = bbJsonConfig.callbackUrl;
    this.version = bbJsonConfig.version;
    this.pkce = bbJsonConfig.pkce;
    this.retryConfig = bbJsonConfig.retryConfig;
    this.BB2_PATIENT_URL = `${String(this.baseUrl)}/${this.version}/fhir/Patient/`;
    this.BB2_COVERAGE_URL = `${String(this.baseUrl)}/${this.version}/fhir/Coverage/`;
    this.BB2_EOB_URL = `${String(this.baseUrl)}/${this.version}/fhir/ExplanationOfBenefit/`;
    this.BB2_AUTH_REQ_URL = `${String(this.baseUrl)}/${this.version}/o/authorize`;
    this.BB2_AUTH_TOKEN_URL = `${String(this.baseUrl)}/${this.version}/o/token/`;
  }

  normalizeConfig(config: BlueButtonJsonConfig) {
    return {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      callbackUrl: config.callbackUrl,
      version: config.version ? config.version : "2",
      baseUrl:
        config.environment === Environments.PRODUCTION
          ? PRODUCTION_BASE_URL
          : SANDBOX_BASE_URL,
      pkce: config.pkce ? config.pkce : true,
      retryConfig: config.retryConfig,
    };
  }

  async getResource(fhirReq: FhirRequest) {
    const user = fhirReq.getAppContext().getUser();

    let accessToken = user.getAuthorizationToken();

    if ( user.accessTokenExpired() ) {
        accessToken = await accessTokenRefresh(fhirReq.getAppContext());
    }

    let fhirUrl;

    switch (fhirReq.getFhirResourceType()) {
        case FhirResourceType.Patient:
            fhirUrl = fhirReq.getAppContext().getBlueButton().BB2_PATIENT_URL;
            break;
        case FhirResourceType.Coverage:
            fhirUrl = fhirReq.getAppContext().getBlueButton().BB2_COVERAGE_URL;
            break;
        case FhirResourceType.ExplanationOfBenefit:
            fhirUrl = fhirReq.getAppContext().getBlueButton().BB2_EOB_URL;
            break;
        default:
            throw Error(`Unknown Fhir Resource Type --> ${fhirReq.getFhirResourceType()}`)
    }

    const response = await get(fhirUrl, fhirReq.getRequest().query, 
                            `${accessToken?.accessToken}`,
                            fhirReq.getAppContext().getBlueButton().retryConfig);

    let fhir_data = undefined;

    if (response.status === 200) {
        fhir_data = response.data;
    }
    else {
        fhir_data = JSON.parse(GENERAL_DATA_ERR);
    }

    fhirReq.getAppContext().doneFhirResource(fhirReq, fhir_data);
    fhirReq.getResponse().json(fhirReq.getAppContext().getUser().getData());
  }
}

async function accessTokenRefresh(ctx: IAppContext) {
    const tokenResponse = await postWithConfig({
    method: 'post',
    url: ctx.getBlueButton().BB2_AUTH_TOKEN_URL,
    auth: {
        username: ctx.getBlueButton().clientId,
        password: ctx.getBlueButton().clientSecret,
    },
    params: {
        grant_type: 'refresh_token',
        client_id: ctx.getBlueButton().clientId,
        refresh_token: ctx.getUser().authToken?.refreshToken,
    },
    });

    const authToken = new AuthorizationToken(tokenResponse.data);
    ctx.getUser().setAuthorizationToken(authToken);
    return authToken;
}
