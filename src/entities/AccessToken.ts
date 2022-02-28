import moment from "moment";

export interface IAccessToken {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: [string];
  refresh_token: string;
  patient: string;
  expires_at?: number;
}

export default class AccessToken implements IAccessToken {
  public access_token: string;
  public expires_in: number;
  public expires_at: number;
  public token_type: string;
  public scope: [string];
  public refresh_token: string;
  public patient: string;

  constructor(authToken: IAccessToken) {
    this.access_token = authToken.access_token;
    this.expires_in = authToken.expires_in;
    this.expires_at = authToken.expires_at
      ? authToken.expires_at
      : moment().add(this.expires_in).valueOf();
    this.patient = authToken.patient;
    this.refresh_token = authToken.refresh_token;
    this.scope = authToken.scope;
    this.token_type = authToken.token_type;
  }
}
