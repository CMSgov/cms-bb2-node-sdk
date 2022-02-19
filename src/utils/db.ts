import moment from 'moment';

export interface IAuthorizationToken {
    accessToken: string,
    expiresIn: number,
    tokenType: string,
    scope: [string],
    refreshToken: string,
    patient: string,
    expiresAt: number
  }
  
export class AuthorizationToken implements IAuthorizationToken {
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
      this.expiresAt = authToken.expires_at;
      this.patient = authToken.patient;
      this.refreshToken = authToken.refresh_token;
      this.scope = authToken.scope;
      this.tokenType = authToken.token_type;
  }
}
  
export interface UserInfo {
  name: string,
  userName: string,
  pcp: string,
  primaryFacility: string
}

export interface IUser {
  authToken?: AuthorizationToken,
  userInfo: UserInfo,
  fhirData?: Map<string, any>,
  errors?: Map<string, any>,
  accessTokenExpired(): boolean,
  setData(data: any): void,
  getData(): any,
  getErrors(): any,
  setErrors(errors: any): void,
  getAuthorizationToken(): AuthorizationToken | undefined,
  setAuthorizationToken(authToken: AuthorizationToken): void,
  reset(): void,
}

export class User implements IUser {
    public authToken?: AuthorizationToken | undefined;
    public userInfo: UserInfo;
    public fhirData?: any;
    public errors?: any;

    constructor(userInfo: UserInfo) {
        this.userInfo = userInfo;
        this.fhirData = {};
        this.errors = {};
    }

    accessTokenExpired(): boolean {
      return moment(this.authToken?.expiresAt).isBefore(moment());
    }

    setData(data: any): void {
        this.fhirData = data;
    }

    getData(): any {
        return this.fhirData;
    }

    getErrors(): any {
      return this.errors;        
    }

    setErrors(errors: any): void {
      this.errors = errors;  
    }

    getAuthorizationToken(): AuthorizationToken | undefined {
        return this.authToken;
    }

    setAuthorizationToken(authToken: AuthorizationToken): void {
        this.authToken = authToken;
    }

    reset(): void {
        this.authToken = undefined;
        this.fhirData = new Map<string, any>();
    }
}
