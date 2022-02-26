import axios from 'axios';
import moment from 'moment';
import FormData from 'form-data';
import BlueButton from './index';
import { RetryConfig } from "./index";

const GENERAL_DATA_ERR = '{"message": "Unable to load data - query FHIR resource error."}';

export enum FhirResourceType {
    Patient = "Patient",
    Coverage = "Coverage",
    Profile = "Profile",
    ExplanationOfBenefit = "ExplanationOfBenefit",
}
    
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
      this.expiresAt = authToken.expires_at ? authToken.expires_at : moment().add(this.expiresIn).valueOf();
      this.patient = authToken.patient;
      this.refreshToken = authToken.refresh_token;
      this.scope = authToken.scope;
      this.tokenType = authToken.token_type;
    }
    
    isExpired(): boolean {
        return moment(this.expiresAt).isBefore(moment());
    }
}
      
export class FhirRequest {
    private fhirResourceType: FhirResourceType;
    private queryParams: any;
    private authToken: AuthorizationToken;
    private bb2: BlueButton;
    private data: any;
    private error: any;
    private status_code: number;

    constructor(fhirResourceType: FhirResourceType, queryParams: any, authToken: AuthorizationToken, bb2: BlueButton) {
      this.fhirResourceType = fhirResourceType;
      this.queryParams = queryParams;
      this.authToken = authToken;
      this.bb2 = bb2;
      this.data = {};
      this.error = {};
      this.status_code = 0;
    }
  
    getBlueButton(): BlueButton {
      return this.bb2;
    }
  
    getFhirResourceType(): FhirResourceType {
        return this.fhirResourceType;
    }

    getQueryParams(): any {
        return this.queryParams;
    }

    getAuthToken(): AuthorizationToken {
        return this.authToken;
    }

    setAuthToken(authToken: AuthorizationToken) {
        this.authToken = authToken;
    }

    getData(): any {
        return this.data;
    }

    setData(data: any): void {
        this.data = data;
    }

    getError(): any {
        return this.error;
    }

    setError(error: any): void {
        this.error = error;
    }

    getStatusCode(): number {
        return this.status_code;
    }

    setStatusCode(status_code: number): void {
        this.status_code = status_code;
    }
}
  
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function isRetryable(error: any, retryConfig: RetryConfig) {
  if (error.response && error.response.status === 500) {
    if (error.request.path && error.request.path.match(retryConfig.endpointPattern)) {
      return true;
    }
  }
  return false;
}

async function doRetry(config: any, retryConfig: RetryConfig) {
  const interval = retryConfig.initInterval;
  const maxAttempts = retryConfig.maxAttempts;

  let resp = null;

  for (let i = 0; i < maxAttempts; i += 1) {
    const waitInSec = eval(retryConfig.backOffExpr);
    await sleep(waitInSec * 1000);
    try {
      resp = await axios(config);
      console.log(resp.data);
      break;
    } catch (error: any) {
      if (error.response) {
        resp = error.response;
      }
    }
  }
  return resp;
}

async function request(config: any, retryConfig?: RetryConfig) {
  let resp = null;
  try {
    resp = await axios(config);
  } catch (error: any) {
    if (error.response) {
      if (retryConfig && retryConfig.enabled && isRetryable(error, retryConfig)) {
        const retryResp = await doRetry(config, retryConfig);
        if (retryResp) {
          resp = retryResp;
        }
      } else {
        resp = error.response;
      }
    } else if (error.request) {
      console.log(`error.request: ${String(error.request)}`);
    }
  }
  return resp;
}

export async function post(endpoint_url: string, data: FormData, headers: any) {
  return request({
    method: 'post',
    url: endpoint_url,
    data,
    headers,
  });
}

export async function postWithConfig(config: any) {
  return request(config);
}

export async function get(endpointUrl: string, params: any, authToken: string, retryConfig?: RetryConfig) {
  return request({
    method: 'get',
    url: endpointUrl,
    params,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }, retryConfig);
}


async function authTokenRefresh(fhirReq: FhirRequest) {
    const tokenResponse = await postWithConfig({
    method: 'post',
    url: fhirReq.getBlueButton().BB2_AUTH_TOKEN_URL,
    auth: {
        username: fhirReq.getBlueButton().clientId,
        password: fhirReq.getBlueButton().clientSecret,
    },
    params: {
        grant_type: 'refresh_token',
        client_id: fhirReq.getBlueButton().clientId,
        refresh_token: fhirReq.getAuthToken().refreshToken,
    },
    });

    const authToken = new AuthorizationToken(tokenResponse.data);
    fhirReq.setAuthToken(authToken);
    return authToken;
}

export async function getResource(fhirReq: FhirRequest) {
    let accessToken = fhirReq.getAuthToken();

    if ( accessToken.isExpired() ) {
        accessToken = await authTokenRefresh(fhirReq);
    }

    let fhirUrl;

    switch (fhirReq.getFhirResourceType()) {
        case FhirResourceType.Patient:
            fhirUrl = fhirReq.getBlueButton().BB2_PATIENT_URL;
            break;
        case FhirResourceType.Coverage:
            fhirUrl = fhirReq.getBlueButton().BB2_COVERAGE_URL;
            break;
        case FhirResourceType.ExplanationOfBenefit:
            fhirUrl = fhirReq.getBlueButton().BB2_EOB_URL;
            break;
        default:
            throw Error(`Unknown Fhir Resource Type --> ${fhirReq.getFhirResourceType()}`)
    }

    const response = await get(fhirUrl, fhirReq.getQueryParams(), 
                            `${accessToken?.accessToken}`,
                            fhirReq.getBlueButton().retryConfig);

    fhirReq.setData(response.status);

    if (response.status === 200) {
        fhirReq.setData(response.data);
    }
    else {
        fhirReq.setData(JSON.parse(GENERAL_DATA_ERR));
    }
}
