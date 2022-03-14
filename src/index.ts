import fs from "fs";
import { cwd } from "process";
import { Environments } from "./enums/environments";
import { AuthData } from "./auth";
import {
  generateAuthData,
  generateAuthorizeUrl,
  getAuthorizationToken,
} from "./auth";
import { AuthorizationToken } from "./entities/AuthorizationToken";

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";

type BlueButtonJsonConfig = {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version?: string;
  environment?: Environments;
};

type BlueButtonConfig = string | BlueButtonJsonConfig;
export default class BlueButton {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version: string;
  baseUrl: string;

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

    if (!bbJsonConfig.callbackUrl) {
      throw new Error("callbackUrl is required");
    }

    this.baseUrl = bbJsonConfig.baseUrl;
    this.clientId = bbJsonConfig.clientId;
    this.callbackUrl = bbJsonConfig.callbackUrl;
    this.clientSecret = bbJsonConfig.clientSecret;
    this.version = bbJsonConfig.version;
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
    };
  }

  //  public getAuthorizationUrl(): string {
  //    return `${this.baseUrl}/v${this.version}/o/authorize`;
  //  }

  public generateAuthData(): AuthData {
    return generateAuthData();
  }

  public generateAuthorizeUrl(AuthData: AuthData): string {
    return generateAuthorizeUrl(this, AuthData);
  }

  public async getAuthorizationToken(
    AuthData: AuthData,
    callbackRequestCode?: string,
    callbackRequestState?: string,
    callbackRequestError?: string
  ) {
    return getAuthorizationToken(
      this,
      AuthData,
      callbackRequestCode,
      callbackRequestState,
      callbackRequestError
    );
  }
}
