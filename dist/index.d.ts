import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';

/**
 * Complex type holding PKCE verifier, code challenge, and state
 */
export declare type AuthData = {
    codeChallenge: string;
    verifier: string;
    state: string;
};

/**
 * Class holding access token and related info,
 * such as token type, scope, associated beneficiary fhir id (patient id),
 * expiration, refresh token.
 */
export declare class AuthorizationToken {
    accessToken: string;
    expiresIn: number;
    expiresAt: number;
    tokenType: string;
    scope: string[];
    refreshToken: string;
    patient: string;
    constructor(authToken: AuthorizationTokenData);
}

/**
 * Complex type holding access token and related info,
 * such as token type, scope, associated beneficiary fhir id (patient id),
 * expiration, refresh token.
 */
export declare type AuthorizationTokenData = {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string[];
    refresh_token: string;
    patient: string;
    expires_at?: number;
};

/**
 * BlueButton - the main SDK class
 */
declare class BlueButton {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
    version: string;
    baseUrl: string;
    constructor(config?: BlueButtonConfig);
    normalizeConfig(config: BlueButtonJsonConfig): {
        clientId: string;
        clientSecret: string;
        callbackUrl: string;
        version: string;
        baseUrl: string;
    };
    /**
     * Returns the ExplanationOfBenefitData resources for the authorized beneficiary
     * @param authToken - AuthorizationToken with access token info
     * @param config - extra request parameters
     * @returns authToken and Fhir Bundle of ExplanationOfBenefitData resources
     */
    getExplanationOfBenefitData(authToken: AuthorizationToken, config?: AxiosRequestConfig): Promise<{
        token: AuthorizationToken;
        response: AxiosResponse<any, any> | undefined;
    }>;
    /**
     * Returns the Patient resource for the current (authorized) beneficiary
     * @param authToken - AuthorizationToken with access token info
     * @param config - extra request parameters
     * @returns authToken and Fhir Patient resources
     */
    getPatientData(authToken: AuthorizationToken, config?: AxiosRequestConfig): Promise<{
        token: AuthorizationToken;
        response: AxiosResponse<any, any> | undefined;
    }>;
    /**
     * Returns the Coverage resources for the current (authorized) beneficiary
     * @param authToken - AuthorizationToken with access token info
     * @param config - extra request parameters
     * @returns authToken and Fhir Bundle of Coverage resources
     */
    getCoverageData(authToken: AuthorizationToken, config?: AxiosRequestConfig): Promise<{
        token: AuthorizationToken;
        response: AxiosResponse<any, any> | undefined;
    }>;
    /**
     * Returns the profile for the current (authorized) beneficiary
     * @param authToken - AuthorizationToken with access token info
     * @param config - extra request parameters
     * @returns authToken and profile
     */
    getProfileData(authToken: AuthorizationToken, config?: AxiosRequestConfig): Promise<{
        token: AuthorizationToken;
        response: AxiosResponse<any, any> | undefined;
    }>;
    /**
     * Returns the resource(s) for the current (authorized) beneficiary as identified by the url path
     * @param path - url path for the resurce(s)
     * @param authToken - AuthorizationToken with access token info
     * @param config - extra request parameters
     * @returns authToken and the resource(s)
     */
    getCustomData(path: string, authToken: AuthorizationToken, config?: AxiosRequestConfig): Promise<{
        token: AuthorizationToken;
        response: AxiosResponse<any, any> | undefined;
    }>;
    /**
     * Generate hashes for PKCE
     * @returns AuthData object
     */
    generateAuthData(): AuthData;
    /**
     * Generate URL for beneficiary login (Medicare.gov)
     * @param authData - PKCE data used in the URL
     * @returns the URL direct to beneficiary login
     */
    generateAuthorizeUrl(authData: AuthData): string;
    /**
     * Callback of OAUTH2 flow, App's oauth2 callback is routed to this function,
     * the returned AuthorizationToken object is used by subsequent Fhir resource(s)
     * queries
     * @param authData - PKCE data
     * @param callbackRequestCode - Auhtorization Code
     * @param callbackRequestState - the state
     * @param callbackRequestError - the error if any
     * @returns AuthorizationToken object containing access token, refresh token, etc.
     */
    getAuthorizationToken(authData: AuthData, callbackRequestCode?: string, callbackRequestState?: string, callbackRequestError?: string): Promise<AuthorizationToken>;
}
export default BlueButton;

export declare type BlueButtonConfig = string | BlueButtonJsonConfig;

/**
 * Configuration parameters for a Blue Button API application
 */
export declare type BlueButtonJsonConfig = {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
    version?: string;
    environment?: Environments;
};

export declare enum Environments {
    PRODUCTION = "PRODUCTION",
    SANDBOX = "SANDBOX"
}

export { }
