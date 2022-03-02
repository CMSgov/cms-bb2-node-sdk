import moment from "moment";

export class AuthorizationToken {
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
    this.expiresAt = authToken.expires_at
      ? authToken.expires_at
      : moment().add(this.expiresIn).valueOf();
    this.patient = authToken.patient;
    this.refreshToken = authToken.refresh_token;
    this.scope = authToken.scope;
    this.tokenType = authToken.token_type;
  }
}
