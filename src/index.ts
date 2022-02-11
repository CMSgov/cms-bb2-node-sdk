import { cwd } from "process";
import { Environments } from "./enums/environments";
import { setCallBackUrl, setUsePKCE, generateAuthorizeUrl } from "./auth";
import { CodeChallenge, generateCodeChallenge } from "./utils/generatePKCE";

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";
const CALLBACK_URL = "http://localhost/callback/";

type BlueButtonJsonConfig = {
  clientId: string;
  clientSecret: string;
  version?: string;
  environment?: Environments;
  usePKCE?: boolean;
  callBackUrl?: string;
};

type BlueButtonConfig = string | BlueButtonJsonConfig;
export default class BlueButton {
  clientId: string;
  clientSecret: string;
  version: string;
  baseUrl: string;

  // AUTH props
  usePKCE: boolean;
  callBackUrl: string;
  state: string;
  codeChallenge: CodeChallenge;
  authorizeUrl: string;

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

    // AUTH constructs
    this.usePKCE = bbJsonConfig.usePKCE;
    this.callBackUrl = bbJsonConfig.callBackUrl;
    this.state = "";
    this.codeChallenge = generateCodeChallenge();
    this.usePKCE = true;
    this.authorizeUrl = "";
  }

  normalizeConfig(config: BlueButtonJsonConfig) {
    return {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      version: config.version ? config.version : "2",
      baseUrl:
        config.environment === Environments.PRODUCTION
          ? PRODUCTION_BASE_URL
          : SANDBOX_BASE_URL,
      usePKCE: config.usePKCE ? config.usePKCE : true,
      callBackUrl: config.callBackUrl ? config.callBackUrl : CALLBACK_URL,
    };
  }

  public setCallBackUrl = setCallBackUrl;
  public setUsePKCE = setUsePKCE;
  public generateAuthorizeUrl = generateAuthorizeUrl;
}
