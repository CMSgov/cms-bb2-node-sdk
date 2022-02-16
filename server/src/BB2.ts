import FormData from 'form-data';
import { Request, Response } from 'express';
import fs from "fs";
import { cwd } from "process";
import { Environments } from "./enums/environments";
import db from './utils/db';
import { get, post, postWithConfig } from './utils/request';
import { clearBB2Data, getLoggedInUser, IUser, AuthorizationToken } from './utils/db';
import { generateCodeChallenge, generateRandomState } from './utils/generatePKCE';

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
  environment?: Environments;
};

type BlueButtonConfig = string | BlueButtonJsonConfig;
export default class BlueButton {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version: string;
  pkce: boolean;
  baseUrl: string;
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
    };
  }

  async authroize(req: Request, res: Response, sdk: BlueButton) {
    const pkce = req.params.pkce === 'true';
    // db.settings = new Settings({
    //   version: req.query?.version?.toString() || this.version,
    //   env: req.query?.env?.toString() || "sandbox",
    //   pkce: req.query?.pkce?.toString() ? pkce : this.pkce,
    // });
    await res.send(generateAuthorizeUrl(sdk));
  }

  async callback(req: Request, res: Response, sdk: BlueButton, redirectUrl: string) {
    try {
        if (req.query.error === BENE_DENIED_ACCESS) {
          const loggedInUser = getLoggedInUser(db);
          // clear all saved claims data since the bene has denied access for the application
          clearBB2Data(loggedInUser);
          loggedInUser.errors?.push(BENE_DENIED_ACCESS);
          throw new Error('Beneficiary denied application access to their data');
        }
    
        if (!req.query.code) {
          throw new Error('Response was missing access code');
        }
        if (db.settings.pkce && !req.query.state) {
          throw new Error('State is required when using PKCE');
        }
    
        const response = await getAccessToken(req.query.code?.toString(), req.query.state?.toString(), sdk);
    
        if (!response.data) {
          throw new Error('Error get access token');
        }
    
        const loggedInUser = getLoggedInUser(db);
    
        if (response.status === 200) {
          const authToken = new AuthorizationToken(response.data);
          loggedInUser.authToken = authToken;
        } else {
          const general_err = '{"message": "Unable to load EOB Data - authorization failed."}';
          loggedInUser.eobData = JSON.parse(general_err);
        }
      } catch (e) {
        console.log(e);
      }

      res.redirect(redirectUrl);
  }

  async getPatient(req: Request, res: Response, sdk: BlueButton) {
    const ret = await getResource(sdk.BB2_PATIENT_URL, sdk.BB2_AUTH_TOKEN_URL, req, res, sdk);
    return ret;
  }
 
  async getCoverage(req: Request, res: Response, sdk: BlueButton) {
    const ret = await getResource(sdk.BB2_COVERAGE_URL, sdk.BB2_AUTH_TOKEN_URL, req, res, sdk);
    return ret;
  }

  async getExplanationOfBenefit(req: Request, res: Response, sdk: BlueButton) {
    const ret = await getResource(sdk.BB2_EOB_URL, sdk.BB2_AUTH_TOKEN_URL, req, res, sdk);
    if (ret) {
      res.json(ret);
    }
  }

}

async function getResource(fhirUrl: string, tokenUrl: string, req: Request, res: Response, sdk: BlueButton) {
    const user = getLoggedInUser(db);
    let accessToken = user.authToken;
    if ( user.accessTokenExpired() ) {
        accessToken = await accessTokenRefresh(tokenUrl, user, sdk);
    }

    const response = await get(fhirUrl, req.query, `${accessToken?.accessToken}`);

    if (response.status === 200) {
        user.eobData = response.data;
        return response.data as unknown;
      }
      else {
        return JSON.parse(GENERAL_DATA_ERR) as unknown;
      }
}

function generateAuthorizeUrl(sdk: BlueButton): string {
    let pkceParams = '';
    const state = generateRandomState();
  
    if (sdk.pkce) {
      const codeChallenge = generateCodeChallenge();
      pkceParams = `${'&code_challenge_method=S256'
              + '&code_challenge='}${codeChallenge.codeChallenge}`;
  
      db.codeChallenges[state] = codeChallenge;
    }
  
    return `${sdk.BB2_AUTH_REQ_URL
    }?client_id=${sdk.clientId
    }&redirect_uri=${sdk.callbackUrl
    }&state=${state
    }&response_type=code${
      pkceParams}`;
  }
  
  async function getAccessToken(code: string, state: string | undefined, sdk: BlueButton) {
    const form = new FormData();
    form.append('client_id', sdk.clientId);
    form.append('client_secret', sdk.clientSecret);
    form.append('code', code);
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri', sdk.callbackUrl);
  
    if (sdk.pkce && state) {
      const codeChallenge = db.codeChallenges[state];
      form.append('code_verifier', codeChallenge.verifier);
      form.append('code_challenge', codeChallenge.codeChallenge);
    }
    return post(sdk.BB2_AUTH_TOKEN_URL, form, form.getHeaders());
  }
  
  async function accessTokenRefresh(tokenUrl: string, user: IUser, sdk: BlueButton) {
      const tokenResponse = await postWithConfig({
        method: 'post',
        url: tokenUrl,
        auth: {
          username: sdk.clientId,
          password: sdk.clientSecret,
        },
        params: {
          grant_type: 'refresh_token',
          client_id: sdk.clientId,
          refresh_token: user.authToken?.refreshToken,
        },
      });
    
      const authToken = new AuthorizationToken(tokenResponse.data);
      user.setAuthorizationToken(authToken);
      return authToken;
  }