import { cwd } from "process";
import { Environments } from "./enums/environments";
import { authData, generateAuthData, generateAuthorizeUrl } from "./auth";

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";

type BlueButtonJsonConfig = {
  clientId: string;
  clientSecret: string;
  callBackUrl: string;
  version?: string;
  environment?: Environments;
};

type BlueButtonConfig = string | BlueButtonJsonConfig;
export default class BlueButton {
  clientId: string;
  clientSecret: string;
  callBackUrl: string;
  version: string;
  baseUrl: string;

  constructor(config?: BlueButtonConfig) {
    let bbJsonConfig;
    if (!config) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jsonConfig = require(DEFAULT_CONFIG_FILE_LOCATION);
        bbJsonConfig = this.normalizeConfig(jsonConfig);
      } catch (e) {
        throw new Error(`Failed to load config file at: ${config}`);
      }
    } else if (typeof config === "string") {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jsonConfig = require(config);
        bbJsonConfig = this.normalizeConfig(jsonConfig);
      } catch (e) {
        throw new Error(`Failed to load config file at: ${config}`);
      }
    } else {
      bbJsonConfig = this.normalizeConfig(config);
    }

    this.baseUrl = bbJsonConfig.baseUrl;
    this.clientId = bbJsonConfig.clientId;
    this.clientSecret = bbJsonConfig.clientSecret;
    this.version = bbJsonConfig.version;
    this.callBackUrl = bbJsonConfig.callBackUrl;
  }

  normalizeConfig(config: BlueButtonJsonConfig) {
    return {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      callBackUrl: config.callBackUrl,
      version: config.version ? config.version : "2",
      baseUrl:
        config.environment === Environments.PRODUCTION
          ? PRODUCTION_BASE_URL
          : SANDBOX_BASE_URL,
    };
  }

  public generateAuthData = generateAuthData;

  public generateAuthorizeUrl(authData: authData): string {
    return generateAuthorizeUrl(this, authData);
  }
}
