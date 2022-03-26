import fs from "fs";
import { cwd } from "process";
import { Environments } from "./enums/environments";
import { AuthData } from "./auth";
import {
  generateAuthData,
  generateAuthorizeUrl,
  getAuthorizationToken,
} from "./auth";
import {
  FhirResourceType,
  getFhirResource,
  getFhirResourceByPath,
} from "./resource";
import { AuthorizationToken } from "./entities/AuthorizationToken";
import { AxiosRequestConfig } from "axios";

const DEFAULT_CONFIG_FILE_LOCATION = `${cwd()}/.bluebutton-config.json`;
const SANDBOX_BASE_URL = "https://sandbox.bluebutton.cms.gov";
const PRODUCTION_BASE_URL = "https://api.bluebutton.cms.gov";

/**
 * Configuration parameters for a BlueButton API application
 */
type BlueButtonJsonConfig = {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  version?: string;
  environment?: Environments;
};

type BlueButtonConfig = string | BlueButtonJsonConfig;

/**
 * BlueButton - the main SDK class
 */
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
    if (
      config.environment &&
      !Object.values(Environments).includes(config.environment)
    ) {
      throw new Error(
        `Invalid environment: must be ${Environments.PRODUCTION} or ${Environments.SANDBOX}`
      );
    }

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

  /**
   * Returns the ExplanationOfBenefitData resources for the authorized beneficiary
   * @param authToken - AuthorizationToken with access token info
   * @param config - extra request parameters
   * @returns authToken and Fhir Bundle of ExplanationOfBenefitData resources
   */
  async getExplanationOfBenefitData(
    authToken: AuthorizationToken,
    config: AxiosRequestConfig = {}
  ) {
    return await getFhirResource(
      FhirResourceType.ExplanationOfBenefit,
      authToken,
      this,
      config
    );
  }

  /**
   * Returns the Patient resource for the current (authorized) beneficiary
   * @param authToken - AuthorizationToken with access token info
   * @param config - extra request parameters
   * @returns authToken and Fhir Patient resources
   */
  async getPatientData(
    authToken: AuthorizationToken,
    config: AxiosRequestConfig = {}
  ) {
    return await getFhirResource(
      FhirResourceType.Patient,
      authToken,
      this,
      config
    );
  }

  /**
   * Returns the Coverage resources for the current (authorized) beneficiary
   * @param authToken - AuthorizationToken with access token info
   * @param config - extra request parameters
   * @returns authToken and Fhir Bundle of Coverage resources
   */
  async getCoverageData(
    authToken: AuthorizationToken,
    config: AxiosRequestConfig = {}
  ) {
    return await getFhirResource(
      FhirResourceType.Coverage,
      authToken,
      this,
      config
    );
  }

  /**
   * Returns the profile for the current (authorized) beneficiary
   * @param authToken - AuthorizationToken with access token info
   * @param config - extra request parameters
   * @returns authToken and profile
   */
  async getProfileData(
    authToken: AuthorizationToken,
    config: AxiosRequestConfig = {}
  ) {
    return await getFhirResource(
      FhirResourceType.Profile,
      authToken,
      this,
      config
    );
  }

  /**
   * Returns the resource(s) for the current (authorized) beneficiary as identified by the url path
   * @param path - url path for the resurce(s)
   * @param authToken - AuthorizationToken with access token info
   * @param config - extra request parameters
   * @returns authToken and the resource(s)
   */
  async getCustomData(
    path: string,
    authToken: AuthorizationToken,
    config: AxiosRequestConfig = {}
  ) {
    return await getFhirResourceByPath(path, authToken, this, config);
  }

  /**
   * Generate hashes for PKCE
   * @returns {}
   */
  generateAuthData(): AuthData {
    return generateAuthData();
  }

  /**
   * Generate URL for beneficiary login (Medicare.gov)
   * @param authData - PKCE data used in the URL
   * @returns the URL direct to beneficiary login
   */
  generateAuthorizeUrl(authData: AuthData): string {
    return generateAuthorizeUrl(this, authData);
  }

  /**
   * Callback of OAUTH2 flow, App's oauth2 callback is routed to this function,
   * the returned AuthorizationToken object is used by subsequent Fhir resource(s)
   * queries
   * @param authData - PKCE data
   * @param callbackRequestCode - Auhtorization Code
   * @param callbackRequestState - the state
   * @param callbackRequestError - the error if any
   * @returns {AuthorizationToken} containing access token, refresh token, etc.
   */
  async getAuthorizationToken(
    authData: AuthData,
    callbackRequestCode?: string,
    callbackRequestState?: string,
    callbackRequestError?: string
  ) {
    return getAuthorizationToken(
      this,
      authData,
      callbackRequestCode,
      callbackRequestState,
      callbackRequestError
    );
  }
}
