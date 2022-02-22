import FormData from 'form-data';
import moment from 'moment';
import { Request, Response } from 'express';
import fs from "fs";
import { cwd } from "process";
import { Environments } from "./enums/environments";
import { get, post, postWithConfig } from './utils/request';
import { CodeChallenge, generateCodeChallenge, generateRandomState } from './utils/generatePKCE';

const BENE_DENIED_ACCESS = 'access_denied';
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

type RetryConfig = {
  enabled: boolean;
  initInterval: number;
  maxAttempts: number;
  backOffExpr: string;
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
    this.expiresAt = authToken.expires_at;
    this.patient = authToken.patient;
    this.refreshToken = authToken.refresh_token;
    this.scope = authToken.scope;
    this.tokenType = authToken.token_type;
  }
}
    
export interface IUser {
  authToken?: AuthorizationToken,
  userInfo: UserInfo,
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
  getCodeChallenge(): CodeChallenge,
  getCodeChallenges(): {[key: string]: CodeChallenge},
  doneAuthorize(res: Response): void,
  donePatient(res: Response, data: any): void,
  doneCoverage(res: Response, data: any): void,
  doneEOB(res: Response, data: any): void,
}

type BlueButtonConfig = string | BlueButtonJsonConfig;
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

    this.baseUrl = bbJsonConfig.baseUrl;
    this.clientId = bbJsonConfig.clientId;
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

  // remove after BB2-1091
  async authroize(req: Request, res: Response, ctx: IAppContext) {
    await res.send(generateAuthorizeUrl(ctx));
  }

  // remove after BB2-1091
  async callback(req: Request, res: Response, ctx: IAppContext) {
    try {
        const loggedInUser = ctx.getUser();
        if (req.query.error === BENE_DENIED_ACCESS) {
          loggedInUser.reset();
          loggedInUser.getErrors().set("message", BENE_DENIED_ACCESS);
          throw new Error('Beneficiary denied application access to their data');
        }
    
        if (!req.query.code) {
          throw new Error('Response was missing access code');
        }
        if (ctx.getBlueButton().pkce && !req.query.state) {
          throw new Error('State is required when using PKCE');
        }
    
        const response = await getAccessToken(req.query.code?.toString(), req.query.state?.toString(), ctx);
    
        if (!response.data) {
          throw new Error('Error get access token');
        }
    
        if (response.status === 200) {
          ctx.getUser().setAuthorizationToken(new AuthorizationToken(response.data));
        } else {
          const general_err = '{"message": "Authorization failed."}';
          loggedInUser.setData(JSON.parse(general_err));
        }
      } catch (e) {
        console.log(e);
      }
      ctx.doneAuthorize(res);
  }

  async getPatient(req: Request, res: Response, ctx: IAppContext) {
    const ret = await getResource(ctx.getBlueButton().BB2_PATIENT_URL, ctx.getBlueButton().BB2_AUTH_TOKEN_URL, req, res, ctx);
    ctx.donePatient(res, ret);
    res.json(ctx.getUser().getData());
  }
 
  async getCoverage(req: Request, res: Response, ctx: IAppContext) {
    const ret = await getResource(ctx.getBlueButton().BB2_COVERAGE_URL, ctx.getBlueButton().BB2_AUTH_TOKEN_URL, req, res, ctx);
    ctx.doneCoverage(res, ret);
    res.json(ctx.getUser().getData());
  }

  async getExplanationOfBenefit(req: Request, res: Response, ctx: IAppContext) {
    const ret = await getResource(ctx.getBlueButton().BB2_EOB_URL, ctx.getBlueButton().BB2_AUTH_TOKEN_URL, req, res, ctx);
    ctx.doneEOB(res, ret);
    res.json(ctx.getUser().getData());
  }
}

async function getResource(fhirUrl: string, tokenUrl: string, req: Request, res: Response, ctx: IAppContext) {
    const user = ctx.getUser();

    let accessToken = user.getAuthorizationToken();

    if ( user.accessTokenExpired() ) {
        accessToken = await accessTokenRefresh(tokenUrl, ctx);
    }

    const response = await get(fhirUrl, req.query, `${accessToken?.accessToken}`);

    let fhir_data = undefined;
    if (response.status === 200) {
        fhir_data = response.data;
    }
    else {
        fhir_data = JSON.parse(GENERAL_DATA_ERR);
    }
    return fhir_data;
}

// remove after BB2-1091
function generateAuthorizeUrl(ctx: IAppContext): string {
    let pkceParams = '';
    const state = generateRandomState();
  
    if (ctx.getBlueButton().pkce) {
      const cc = generateCodeChallenge();
      pkceParams = `${'&code_challenge_method=S256'
              + '&code_challenge='}${cc.codeChallenge}`;
      ctx.getCodeChallenges()[state] = cc;
    }
  
    return `${ctx.getBlueButton().BB2_AUTH_REQ_URL
    }?client_id=${ctx.getBlueButton().clientId
    }&redirect_uri=${ctx.getBlueButton().callbackUrl
    }&state=${state
    }&response_type=code${
      pkceParams}`;
  }
  
  // remove after BB2-1091
  async function getAccessToken(code: string, state: string | undefined, ctx: IAppContext) {
    const form = new FormData();
    form.append('client_id', ctx.getBlueButton().clientId);
    form.append('client_secret', ctx.getBlueButton().clientSecret);
    form.append('code', code);
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri', ctx.getBlueButton().callbackUrl);
  
    if (ctx.getBlueButton().pkce && state) {
      const cc = ctx.getCodeChallenges()[state];
      form.append('code_verifier', cc.verifier);
      form.append('code_challenge', cc.codeChallenge);
    }
    return post(ctx.getBlueButton().BB2_AUTH_TOKEN_URL, form, form.getHeaders());
  }
  
  // remove after BB2-1091
  async function accessTokenRefresh(tokenUrl: string, ctx: IAppContext) {
      const tokenResponse = await postWithConfig({
        method: 'post',
        url: tokenUrl,
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

// test code: test app;
// remove after BB2-1091
// MyApp imports: remove after test BB2-1091
import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';
// end MyApp imports

export interface UserInfo {
  name: string,
  userName: string,
  pcp: string,
  primaryFacility: string
}
  
class User implements IUser {
    public authToken?: AuthorizationToken | undefined;
    public userInfo: UserInfo;
    public fhirData?: any;
    public errors?: any;

    constructor(userInfo: UserInfo) {
        this.userInfo = userInfo;
        this.fhirData = {};
        this.errors = {};
    }

    accessTokenExpired(): boolean {
      return moment(this.authToken?.expiresAt).isBefore(moment());
    }

    setData(data: any): void {
        this.fhirData = data;
    }

    getData(): any {
        return this.fhirData;
    }

    getErrors(): any {
      return this.errors;        
    }

    setErrors(errors: any): void {
      this.errors = errors;  
    }

    getAuthorizationToken(): AuthorizationToken | undefined {
        return this.authToken;
    }

    setAuthorizationToken(authToken: AuthorizationToken): void {
        this.authToken = authToken;
    }

    reset(): void {
        this.authToken = undefined;
        this.fhirData = new Map<string, any>();
    }
}

export interface DB {
    patients: any,
    users: IUser[],
    codeChallenges: {
      [key: string]: CodeChallenge
    },
    codeChallenge: CodeChallenge,
    settings: any
  }
  
const db: DB = {
  patients: {},
  users: [new User({
    name: 'John Doe',
    userName: 'jdoe29999',
    pcp: 'Dr. Hibbert',
    primaryFacility: 'Springfield General Hospital',
    })],
  codeChallenges: {},
  codeChallenge: {
    codeChallenge: '',
    verifier: '',
  },
  settings: [],
};
  
class AppCtx implements IAppContext {
    db: DB;
    sdk: BlueButton;

    constructor(db: DB, sdk: BlueButton) {
        this.db = db;
        this.sdk = sdk;
    }

    getUser() {
        return this.db.users[0];
    }

    getBlueButton() {
        return this.sdk;
    }

    getCodeChallenge(): CodeChallenge {
        return this.db.codeChallenge;
    }

    getCodeChallenges(): {[key: string]: CodeChallenge} {
        return this.db.codeChallenges;
    }

    doneAuthorize(res: Response) {
        console.log("AUthorize done!")
        // redirect to FE
        res.redirect("http://localhost:3000");
    }

    donePatient(res: Response, data: any) {
      console.log("Patient query done!");
      this.getUser().setData({'patient': data});
    }
  
    doneCoverage(res: Response, data: any) {
      console.log("Coverage query done!");
      this.getUser().setData({'coverage': data});
    }
    
    doneEOB(res: Response, data: any) {
      console.log("EOB query done, redirect FE!");
      this.getUser().setData({'eobData': data});
    }
}

const app = express();
const { BAD_REQUEST } = StatusCodes;

// dispatch to SDK
const bb2Router = Router();
const bb2SDK = new BlueButton();
const appContext = new AppCtx(db, bb2SDK);

bb2Router.get('/bluebutton/callback', async (req: Request, res: Response) => {
    return await bb2SDK.callback(req, res, appContext);
});
bb2Router.get('/authorize/authurl', async (req: Request, res: Response) => {
    return await bb2SDK.authroize(req, res, appContext);
});
bb2Router.get('/data/benefit', async (req: Request, res: Response) => {
    return await bb2SDK.getExplanationOfBenefit(req, res, appContext);
});
bb2Router.get('/data/coverage', async (req: Request, res: Response) => {
    return await bb2SDK.getCoverage(req, res, appContext);
});
bb2Router.get('/data/patient', async (req: Request, res: Response) => {
    return await bb2SDK.getPatient(req, res, appContext);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', bb2Router);

app.use((err: Error, _req: Request, res: Response) => {
  console.log(err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

app.listen(Number(3001), () => {
  console.log("Express server started on port: 3001");
});
// end test code

