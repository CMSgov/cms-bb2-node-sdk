import fs from "fs";
import { cwd } from "process";
import { Environments } from "./enums/environments";

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";

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
  

type BlueButtonConfig = string | BlueButtonJsonConfig;

export default class BlueButton {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version: string;
  pkce: boolean;
  baseUrl: string;
  retryConfig?: RetryConfig;

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

}
