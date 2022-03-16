import axios from "axios";
import BlueButton from ".";
import {
  AuthorizationToken,
  AuthorizationTokenData,
} from "./entities/AuthorizationToken";
import { SDK_HEADER_KEY, SDK_HEADER } from "./enums/environments";
import { getFhirResource, FhirResourceType } from "./resource";

jest.mock("axios");
jest.spyOn(global, "setTimeout");

function flushPromises() {
  return new Promise(jest.requireActual("timers").setImmediate);
}

const mockedAxios = axios as jest.Mocked<typeof axios>;

const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

const BB2_PATIENT_URL = `${String(bb.baseUrl)}/v${bb.version}/fhir/Patient/`;

const BB2_COVERAGE_URL = `${String(bb.baseUrl)}/v${bb.version}/fhir/Coverage/`;

const BB2_EOB_URL = `${String(bb.baseUrl)}/v${
  bb.version
}/fhir/ExplanationOfBenefit/`;

const BB2_PROFILE_URL = `${String(bb.baseUrl)}/v${bb.version}/connect/userinfo`;

const eob = { status: 200, data: { resource: "EOB" } };

const coverage = { status: 200, data: { resource: "Coverage" } };

const patient = { status: 200, data: { resource: "Patient" } };

const profile = { status: 200, data: { resource: "Profile" } };

// fabricate what retry logic expects
const MOCK_RETRYABLE_RESPONSE = {
  isAxiosError: true,
  status: 500,
  request: {
    path: BB2_PATIENT_URL,
  },
  response: {
    status: 500,
    data: {
      message: "Service not available, try later.",
    },
  },
};

const HEADER_W_TOKEN = {
  headers: {
    Authorization: "Bearer access_token_foo",
    [SDK_HEADER_KEY]: SDK_HEADER,
  },
};

const AUTH_TOKEN_DATA_MOCK: AuthorizationTokenData = {
  access_token: "access_token_foo",
  expires_in: 36000,
  token_type: "Bearer",
  scope: ["scope1", "scope2", "scope3"],
  refresh_token: "refresh_token_bar",
  patient: "-19990000000001",
};

const AUTH_TOKEN_MOCK = new AuthorizationToken(AUTH_TOKEN_DATA_MOCK);

const AUTH_TOKEN_REFRESHED_DATA_MOCK: AuthorizationTokenData = {
  access_token: "access_token_foo_refreshed",
  expires_in: 36000,
  token_type: "Bearer",
  scope: ["scope1", "scope2", "scope3"],
  refresh_token: "refresh_token_bar_refreshed",
  patient: "-19990000000001",
};

const AUTH_TOKEN_REFRESHED_RESPONSE_MOCK = {
  status: 200,
  data: AUTH_TOKEN_REFRESHED_DATA_MOCK,
};

const AUTH_TOKEN_REFRESHED_MOCK = new AuthorizationToken(
  AUTH_TOKEN_REFRESHED_DATA_MOCK
);

const AUTH_EXPIRED_TOKEN_DATA_DMOCK: AuthorizationTokenData = {
  access_token: "access_token_foo_expired",
  expires_in: -36000,
  token_type: "Bearer",
  scope: ["scope1", "scope2", "scope3"],
  refresh_token: "refresh_token_bar_expired",
  patient: "-19990000000001",
};

const AUTH_TOKEN_EXPIRED_MOCK = new AuthorizationToken(
  AUTH_EXPIRED_TOKEN_DATA_DMOCK
);

const TOKEN_REFRESH_ERROR_RESPONSE_MOCK = {
  status: 401,
  data: { message: "Unauthorized operation!" },
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.useFakeTimers();
});

test("fhir query for patient data returns a successful response", async () => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve(patient);
  });

  const response = await getFhirResource(
    FhirResourceType.Patient,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  );

  expect(response.response?.status).toEqual(200);
  expect(response.response?.data).toEqual(patient.data);
  expect(response.token).toEqual(AUTH_TOKEN_MOCK);
  expect(mockedAxios.get).toHaveBeenCalledWith(BB2_PATIENT_URL, HEADER_W_TOKEN);
  expect(mockedAxios.post).toHaveBeenCalledTimes(0);
});

test("fhir query for coverage data returns a successful response", async () => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve(coverage);
  });

  const response = await getFhirResource(
    FhirResourceType.Coverage,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  );

  expect(response.response?.status).toEqual(200);
  expect(response.response?.data).toEqual(coverage.data);
  expect(response.token).toEqual(AUTH_TOKEN_MOCK);
  expect(mockedAxios.get).toHaveBeenCalledWith(
    BB2_COVERAGE_URL,
    HEADER_W_TOKEN
  );
  expect(mockedAxios.post).toHaveBeenCalledTimes(0);
});

test("fhir query for explanation of benefit data returns a successful response", async () => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve(eob);
  });

  const response = await getFhirResource(
    FhirResourceType.ExplanationOfBenefit,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  );

  expect(response.response?.status).toEqual(200);
  expect(response.response?.data).toEqual(eob.data);
  expect(response.token).toEqual(AUTH_TOKEN_MOCK);
  expect(mockedAxios.get).toHaveBeenCalledWith(BB2_EOB_URL, HEADER_W_TOKEN);
  expect(mockedAxios.post).toHaveBeenCalledTimes(0);
});

test("fhir query for patient data returns a successful response", async () => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve(profile);
  });

  const response = await getFhirResource(
    FhirResourceType.Profile,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  );

  expect(response.response?.status).toEqual(200);
  expect(response.response?.data).toEqual(profile.data);
  expect(response.token).toEqual(AUTH_TOKEN_MOCK);
  expect(mockedAxios.get).toHaveBeenCalledWith(BB2_PROFILE_URL, HEADER_W_TOKEN);
  expect(mockedAxios.post).toHaveBeenCalledTimes(0);
});

test("fhir query with initial failure and success on 2nd retry", async () => {
  mockedAxios.isAxiosError.mockReturnValue(true);
  mockedAxios.get
    .mockRejectedValueOnce(MOCK_RETRYABLE_RESPONSE)
    .mockRejectedValueOnce(MOCK_RETRYABLE_RESPONSE)
    .mockResolvedValueOnce(patient);

  const responsePromise = getFhirResource(
    FhirResourceType.Patient,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  );
  await flushPromises();
  jest.runAllTimers();
  await flushPromises();
  jest.runAllTimers();
  const response = await responsePromise;

  expect(response.response?.status).toEqual(200);
  expect(response.response?.data).toEqual(patient.data);
  expect(response.token).toEqual(AUTH_TOKEN_MOCK);
  expect(mockedAxios.get).toHaveBeenCalledTimes(3);
  expect(mockedAxios.post).toHaveBeenCalledTimes(0);
});

test("fhir query with expired token that is automatically refreshed", async () => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve(patient);
  });

  mockedAxios.post.mockImplementation(() => {
    return Promise.resolve(AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);
  });

  const response = await getFhirResource(
    FhirResourceType.Profile,
    AUTH_TOKEN_EXPIRED_MOCK,
    bb,
    {}
  );

  expect(response.response?.status).toEqual(200);
  expect(response.response?.data).toEqual(patient.data);
  expect(response.token).toEqual({
    ...AUTH_TOKEN_REFRESHED_MOCK,
    expiresAt: response.token.expiresAt,
  });
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  expect(mockedAxios.post).toHaveBeenCalledTimes(1);
});
