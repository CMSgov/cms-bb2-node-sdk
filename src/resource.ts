import axios, { AxiosError, AxiosRequestConfig } from "axios";
import moment from "moment";
import BlueButton from "./index";
import { AuthorizationToken } from "./entities/AuthorizationToken";
import { getAccessTokenUrl } from "./auth";
import { SDK_HEADERS } from "./enums/environments";

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

export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function isRetryable(error: AxiosError) {
  return (
    error.response &&
    retrySettings.retryableCodes.includes(error.response.status)
  );
}

async function doRetry(fhirUrl: string, config: AxiosRequestConfig) {
  let resp;

  for (let i = 0; i < retrySettings.maxAttempts; i++) {
    const waitInMilliSec = retrySettings.initInterval * 2 ** i;
    await sleep(waitInMilliSec);
    try {
      resp = await axios.get(fhirUrl, config);
      break;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error) && isRetryable(error)) {
        resp = error.response;
      } else {
        throw error;
      }
    }
  }

  return resp;
}

async function refreshAccessToken(
  authToken: AuthorizationToken,
  bb: BlueButton
) {
  const tokenUrl = getAccessTokenUrl(bb);
  const resp = await axios.post(
    tokenUrl,
    {},
    {
      headers: SDK_HEADERS,
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

  return new AuthorizationToken(resp.data);
}

export async function getFhirResourceByPath(
  resourcePath: string,
  authToken: AuthorizationToken,
  bb2: BlueButton,
  axiosConfig: AxiosRequestConfig
) {
  let newAuthToken = authToken;

  if (moment(authToken.expiresAt).isBefore(moment())) {
    newAuthToken = await refreshAccessToken(authToken, bb2);
  }

  const fhirUrl = `${String(bb2.baseUrl)}/v${bb2.version}/${resourcePath}`;

  let resp = null;

  const config = {
    ...axiosConfig,
    headers: {
      ...axiosConfig.headers,
      Authorization: `Bearer ${newAuthToken.accessToken}`,
      ...SDK_HEADERS,
    },
  };

  try {
    resp = await axios.get(fhirUrl, config);
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error) && isRetryable(error)) {
      resp = await doRetry(fhirUrl, config);
    } else {
      throw error;
    }
  }
  return {
    token: newAuthToken,
    response: resp,
  };
}

export async function getFhirResource(
  resourceType: FhirResourceType,
  authToken: AuthorizationToken,
  bb2: BlueButton,
  axiosConfig: AxiosRequestConfig
) {
  return await getFhirResourceByPath(
    `${resourceType}`,
    authToken,
    bb2,
    axiosConfig
  );
}
