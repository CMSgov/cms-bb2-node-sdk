import axios from "axios";
import moment from "moment";
import BlueButton from "./index";
import { AuthorizationToken } from "./entities/AuthorizationToken";

// initInterval in milli-seconds
export const retrySettings = {
  initInterval: 5000,
  maxAttempts: 3,
  retryableCodes: [500, 502, 503, 504],
};

// also serves as central registry for supported resource paths
export enum FhirResourceType {
  Patient = "fhir/Patient/",
  Coverage = "fhir/Coverage/",
  Profile = "connect/userinfo",
  ExplanationOfBenefit = "fhir/ExplanationOfBenefit/",
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
      retryOK = matchFhirPath(error.request.path);
    }
  }
  return retryOK;
}

function matchFhirPath(path: string) {
  let matched = false;
  for (const t of Object.values(FhirResourceType)) {
    if (path.endsWith(t)) {
      matched = true;
      break;
    }
  }
  return matched;
}

async function doRetry(fhirUrl: string, config: any) {
  let resp = null;

  for (let i = 0; i < retrySettings.maxAttempts; i += 1) {
    const waitInMilliSec = retrySettings.initInterval * 2 ** i;
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

export async function getFhirResource(
  resourceType: FhirResourceType,
  authToken: AuthorizationToken,
  bb2: BlueButton,
  queryParams: any
) {
  if (
    !(
      authToken.accessToken &&
      authToken.expiresIn &&
      authToken.expiresAt &&
      authToken.patient &&
      authToken.refreshToken &&
      authToken.scope &&
      authToken.tokenType
    )
  ) {
    throw new Error("Invalid authorization token.");
  }

  let newAuth = authToken;

  if (moment(authToken.expiresAt).isBefore(moment())) {
    newAuth = await refreshAccessToken(authToken, bb2);
  }

  const fhirUrl = `${String(bb2.baseUrl)}/v${bb2.version}/${resourceType}`;

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
