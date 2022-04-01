import moment from "moment";

/**
 * Complex type holding access token and related info,
 * such as token type, scope, associated beneficiary fhir id (patient id),
 * expiration, refresh token.
 */
export type AuthorizationTokenData = {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string[];
  refresh_token: string;
  patient: string;
  expires_at?: number;
};

/**
 * Class holding access token and related info,
 * such as token type, scope, associated beneficiary fhir id (patient id),
 * expiration, refresh token.
 */
export class AuthorizationToken {
  public accessToken: string;
  public expiresIn: number;
  public expiresAt: number;
  public tokenType: string;
  public scope: string[];
  public refreshToken: string;
  public patient: string;

  constructor(authToken: AuthorizationTokenData) {
    this.accessToken = authToken.access_token;
    this.expiresIn = authToken.expires_in;
    this.expiresAt = authToken.expires_at
      ? authToken.expires_at
      : moment()
          .add(this.expiresIn * 1000)
          .valueOf();
    this.patient = authToken.patient;
    this.refreshToken = authToken.refresh_token;
    this.scope = authToken.scope;
    this.tokenType = authToken.token_type;
  }
}
