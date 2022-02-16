import moment from 'moment';
import AuthorizationToken from '../entities/AuthorizationToken';
// import Settings from '../entities/Settings';
import { CodeChallenge } from './generatePKCE';

/* DEVELOPER NOTES:
* This is our mocked DB
*/

export interface UserInfo {
  name: string,
  userName: string,
  pcp: string,
  primaryFacility: string
}

export interface IUser {
  authToken?: AuthorizationToken,
  userInfo: UserInfo,
  eobData?: any,
  errors?: string[],
  accessTokenExpired(): boolean,
  setData(data: any): void,
  getData(): any,
  getAuthorizationToken(): AuthorizationToken | undefined,
  setAuthorizationToken(authToken: AuthorizationToken): void,
}

export class User implements IUser {
    public authToken?: AuthorizationToken | undefined;
    public userInfo: UserInfo;
    public eobData?: any;
    public errors?: string[];

    constructor(userInfo: UserInfo) {
        this.userInfo = userInfo;
    }

    accessTokenExpired(): boolean {
      return moment(this.authToken?.expiresAt).isBefore(moment());
    }

    setData(data: any): void {
        this.eobData = data;
    }

    getData(): any {
        return this.eobData;
    }

    getAuthorizationToken(): AuthorizationToken | undefined {
        return this.authToken;
    }

    setAuthorizationToken(authToken: AuthorizationToken): void {
        this.authToken = authToken;
    }
}

export interface DB {
  patients: any,
  users: IUser[],
  codeChallenges: {
    [key: string]: CodeChallenge
  },
  codeChallenge: CodeChallenge,
  settings: any
}

const db: DB = {
  patients: {},
  users: [new User({
      name: 'John Doe',
      userName: 'jdoe29999',
      pcp: 'Dr. Hibbert',
      primaryFacility: 'Springfield General Hospital',
    })],
  codeChallenges: {},
  codeChallenge: {
    codeChallenge: '',
    verifier: '',
  },
  settings: [],
};

export function getLoggedInUser(db : DB) {
  return db.users[0];
}
  
export function clearBB2Data(user: IUser) {
  const userRef = user;
  userRef.authToken = undefined;
  userRef.eobData = undefined;
}
  
export default db;
