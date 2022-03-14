import axios from "axios";
import moment from "moment";
import BlueButton from "./index";

// initInterval in milli-seconds
export const retrySettings = {
  initInterval: 5000,
  maxAttempts: 3,
  backOffExpr: "interval * ( 2 ** i )",
  retryableCodes: [500, 502, 503, 504],
  retryableFhirPath: [
    "/fhir/Patient/",
    "/fhir/Coverage/",
    "/fhir/ExplanationOfBenefit/",
    "/connect/userinfo",
  ],
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
    this.expiresIn = authToken.expires_in; // in seconds
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

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function isRetryable(error: any) {
  let retryOK = false;

  if (
    error.response &&
    retrySettings.retryableCodes.includes(error.response.status)
  ) {
    if (error.request && error.request.path) {
      retryOK = endsWith(error.request.path);
    }
  }
  return retryOK;
}

function endsWith(path: string) {
  let matched = false;
  for (let i = 0; i < retrySettings.retryableFhirPath.length; i++) {
    if (path.endsWith(retrySettings.retryableFhirPath[i])) {
      matched = true;
      break;
    }
  }
  return matched;
}

async function doRetry(fhirUrl: string, config: any) {
  const interval = retrySettings.initInterval;
  const maxAttempts = retrySettings.maxAttempts;

  let resp = null;

  for (let i = 0; i < maxAttempts; i += 1) {
    const waitInMilliSec = eval(retrySettings.backOffExpr);
    await sleep(waitInMilliSec);
    try {
      resp = await axios.get(fhirUrl, config);
      break;
    } catch (error: any) {
      if (error.response) {
        resp = error.response;
      }
    }
  }
  return resp;
}

async function refreshAccessToken(
  authToken: AuthorizationToken,
  bb: BlueButton
) {
  const resp = await axios.post(
    `${String(bb.baseUrl)}/v${bb.version}/o/token/`,
    {},
    {
      auth: {
        username: bb.clientId,
        password: bb.clientSecret,
      },
      params: {
        grant_type: "refresh_token",
        client_id: bb.clientId,
        refresh_token: authToken.refreshToken,
      },
    }
  );

  if (resp.status !== 200) {
    const msg = `Failed to refresh access token, status: ${resp.status}, error: ${resp.data}.`;
    throw new Error(msg);
  }

  return new AuthorizationToken(resp.data);
}

export async function fetchData(
  resourceType: FhirResourceType,
  authToken: AuthorizationToken,
  bb2: BlueButton,
  queryParams: any
) {
  authToken.validate();

  let newAuth = authToken;

  if (authToken.isExpired()) {
    newAuth = await refreshAccessToken(authToken, bb2);
  }

  let fhirUrl = `${String(bb2.baseUrl)}/v${bb2.version}`;

  switch (resourceType) {
    case FhirResourceType.Patient:
      fhirUrl = `${fhirUrl}/fhir/Patient/`;
      break;
    case FhirResourceType.Coverage:
      fhirUrl = `${fhirUrl}/fhir/Coverage/`;
      break;
    case FhirResourceType.ExplanationOfBenefit:
      fhirUrl = `${fhirUrl}/fhir/ExplanationOfBenefit/`;
      break;
    case FhirResourceType.Profile:
      fhirUrl = `${fhirUrl}/connect/userinfo`;
      break;
    default:
      throw Error(`Unknown Fhir Resource Type --> ${resourceType}`);
  }

  let resp = null;

  const config = {
    queryParams,
    headers: {
      Authorization: `Bearer ${newAuth.accessToken}`,
    },
  };

  try {
    resp = await axios.get(fhirUrl, config);
  } catch (error: any) {
    if (error.response) {
      if (isRetryable(error)) {
        const retryResp = await doRetry(fhirUrl, config);
        if (retryResp) {
          resp = retryResp;
        }
      } else {
        resp = error.response;
      }
    }
  }
  return { token: newAuth, status_code: resp.status, data: resp.data };
}
