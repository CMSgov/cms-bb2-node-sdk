import axios, { AxiosError, AxiosRequestConfig } from "axios";
import moment from "moment";
import BlueButton from "./index";
import { AuthorizationToken } from "./entities/AuthorizationToken";
import { refreshAuthToken } from "./auth";
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

export async function getFhirResourceByPath(
  resourcePath: string,
  authToken: AuthorizationToken,
  bb2: BlueButton,
  axiosConfig: AxiosRequestConfig
) {
  let newAuthToken = authToken;

  // rare edge case: access token in authToken become expired right after below check
  // and before subsequent fhir end point call, in that case, a correctional action
  // by the app logic might be a recommended practice.
  if (moment(authToken.expiresAt).isBefore(moment())) {
    newAuthToken = await refreshAuthToken(authToken, bb2);
  }

  // modified to allow absolute path if it is under base URL
  const fhirUrl = resourcePath.startsWith(bb2.baseUrl)
    ? resourcePath
    : `${String(bb2.baseUrl)}/v${bb2.version}/${resourcePath}`;

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
