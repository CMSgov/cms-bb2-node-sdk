import axios from "axios";
import moment from "moment";
import BlueButton from "./index";

// generic error message
const GENERAL_DATA_ERR =
  '{"message": "Unable to load data - query FHIR resource error."}';

const retrySettings = {
  initInterval: 5,
  maxAttempts: 3,
  backOffExpr: "interval * ( 2 ** i )",
  endpointPattern: "^/v[12]/fhir/.*",
  retryableCodes: [500, 502, 503, 504],
};

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
    this.expiresAt = authToken.expires_at
      ? authToken.expires_at
      : moment().add(this.expiresIn).valueOf();
    this.patient = authToken.patient;
    this.refreshToken = authToken.refresh_token;
    this.scope = authToken.scope;
    this.tokenType = authToken.token_type;
  }

  isExpired(): boolean {
    return moment(this.expiresAt).isBefore(moment());
  }

  validate(): void {
    if (
      !(
        this.accessToken &&
        this.expiresIn &&
        this.expiresAt &&
        this.patient &&
        this.refreshToken &&
        this.scope &&
        this.tokenType
      )
    ) {
      throw new Error("Invalid authorization token.");
    }
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
  private fhirUrls: string[];
  readonly BB2_PATIENT_URL;
  readonly BB2_COVERAGE_URL;
  readonly BB2_EOB_URL;
  readonly BB2_PROFILE_URL;
  readonly BB2_AUTH_TOKEN_URL;

  constructor(
    fhirResourceType: FhirResourceType,
    queryParams: any,
    authToken: AuthorizationToken,
    bb2: BlueButton
  ) {
    this.fhirResourceType = fhirResourceType;
    this.queryParams = queryParams;
    this.authToken = authToken;
    this.bb2 = bb2;
    this.data = {};
    this.error = {};
    this.status_code = 0;
    this.BB2_PATIENT_URL = `${String(bb2.baseUrl)}/v${
      bb2.version
    }/fhir/Patient/`;
    this.BB2_COVERAGE_URL = `${String(bb2.baseUrl)}/v${
      bb2.version
    }/fhir/Coverage/`;
    this.BB2_EOB_URL = `${String(bb2.baseUrl)}/v${
      bb2.version
    }/fhir/ExplanationOfBenefit/`;
    this.BB2_PROFILE_URL = `${String(bb2.baseUrl)}/v${
      bb2.version
    }/connect/userinfo`;
    this.BB2_AUTH_TOKEN_URL = `${String(bb2.baseUrl)}/v${bb2.version}/o/token/`;
    this.fhirUrls = [
      this.BB2_PATIENT_URL,
      this.BB2_COVERAGE_URL,
      this.BB2_EOB_URL,
      this.BB2_PROFILE_URL,
    ];
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

  getFhirUrls(): string[] {
    return this.fhirUrls;
  }
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function isRetryable(error: any, fhirReq: FhirRequest) {
  let retryOK = false;

  if (
    error.response &&
    retrySettings.retryableCodes.includes(error.response.status)
  ) {
    const err_response = error.response;
    if (
      error.request &&
      error.request.path &&
      error.request.path.match(retrySettings.endpointPattern)
    ) {
      retryOK = true;
    } else if (
      err_response.config &&
      err_response.request &&
      err_response.request.responseURL
    ) {
      if (
        fhirReq.getFhirUrls().includes(String(err_response.request.responseURL))
      ) {
        retryOK = true;
      }
    }
  }
  return retryOK;
}

async function doRetry(config: any) {
  const interval = retrySettings.initInterval;
  const maxAttempts = retrySettings.maxAttempts;

  let resp = null;

  for (let i = 0; i < maxAttempts; i += 1) {
    const waitInSec = eval(retrySettings.backOffExpr);
    await sleep(waitInSec * 1000);
    try {
      resp = await axios(config);
      break;
    } catch (error: any) {
      if (error.response) {
        resp = error.response;
      }
    }
  }
  return resp;
}

async function request(config: any, fhirReq: FhirRequest) {
  let resp = null;
  try {
    resp = await axios(config);
  } catch (error: any) {
    if (error.response) {
      if (isRetryable(error, fhirReq)) {
        const retryResp = await doRetry(config);
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

async function post(config: any, fhirReq: FhirRequest) {
  return request(config, fhirReq);
}

async function get(
  endpointUrl: string,
  params: any,
  authToken: string,
  fhirReq: FhirRequest
) {
  const config = {
    method: "get",
    url: endpointUrl,
    params,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  return request(config, fhirReq);
}

async function authTokenRefresh(fhirReq: FhirRequest) {
  const tokenResponse = await post(
    {
      method: "post",
      url: fhirReq.BB2_AUTH_TOKEN_URL,
      auth: {
        username: fhirReq.getBlueButton().clientId,
        password: fhirReq.getBlueButton().clientSecret,
      },
      params: {
        grant_type: "refresh_token",
        client_id: fhirReq.getBlueButton().clientId,
        refresh_token: fhirReq.getAuthToken().refreshToken,
      },
    },
    fhirReq
  );

  fhirReq.setStatusCode(tokenResponse.status);

  if (tokenResponse.status !== 200) {
    const msg = `Failed to refresh access token, status: ${tokenResponse.status}, error: ${tokenResponse.data}.`;
    fhirReq.setError({ error: msg });
    throw new Error(msg);
  }

  const authToken = new AuthorizationToken(tokenResponse.data);

  fhirReq.setAuthToken(authToken);

  return authToken;
}

export async function getResource(fhirReq: FhirRequest) {
  let accessToken = fhirReq.getAuthToken();

  if (accessToken) {
    accessToken.validate();
  }

  if (accessToken.isExpired()) {
    accessToken = await authTokenRefresh(fhirReq);
  }

  let fhirUrl;

  switch (fhirReq.getFhirResourceType()) {
    case FhirResourceType.Patient:
      fhirUrl = fhirReq.BB2_PATIENT_URL;
      break;
    case FhirResourceType.Coverage:
      fhirUrl = fhirReq.BB2_COVERAGE_URL;
      break;
    case FhirResourceType.ExplanationOfBenefit:
      fhirUrl = fhirReq.BB2_EOB_URL;
      break;
    case FhirResourceType.Profile:
      fhirUrl = fhirReq.BB2_PROFILE_URL;
      break;
    default:
      throw Error(
        `Unknown Fhir Resource Type --> ${fhirReq.getFhirResourceType()}`
      );
  }

  const response = await get(
    fhirUrl,
    fhirReq.getQueryParams(),
    `${accessToken?.accessToken}`,
    fhirReq
  );

  fhirReq.setStatusCode(response.status);

  // set data and also return data
  if (response.status === 200) {
    fhirReq.setData(response.data);
    return response.data;
  } else {
    fhirReq.setData(JSON.parse(GENERAL_DATA_ERR));
    return JSON.parse(GENERAL_DATA_ERR);
  }
}
