import axios from "axios";
import BlueButton from ".";
import {
  AuthorizationToken,
  AuthorizationTokenData,
} from "./entities/AuthorizationToken";
import { Errors } from "./enums/errors";
import { retrySettings, getFhirResource, FhirResourceType } from "./resource";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

const BB2_PATIENT_URL = `${String(bb.baseUrl)}/v${bb.version}/fhir/Patient/`;

const BB2_COVERAGE_URL = `${String(bb.baseUrl)}/v${bb.version}/fhir/Coverage/`;

const BB2_EOB_URL = `${String(bb.baseUrl)}/v${
  bb.version
}/fhir/ExplanationOfBenefit/`;

const BB2_PROFILE_URL = `${String(bb.baseUrl)}/v${bb.version}/connect/userinfo`;

const BB2_AUTH_TOKEN_URL = `${String(bb.baseUrl)}/v${bb.version}/o/token/`;

const eob = { status: 200, data: { resource: "EOB" } };

const coverage = { status: 200, data: { resource: "Coverage" } };

const patient = { status: 200, data: { resource: "Patient" } };

const profile = { status: 200, data: { resource: "Profile" } };

const resourceNotFound = {
  status: 400,
  data: { details: "Resource not found." },
};

// fabricate what retry logic expects
const MOCK_RETRYABLE_RESPONSE = {
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

const MOCK_NON_RETRYABLE_RESPONSE = {
  status: 505,
  request: {
    path: BB2_PATIENT_URL,
  },
  response: {
    status: 505,
    data: {
      message: "Version not supported.",
    },
  },
};

const HEADER_W_TOKEN = {
  headers: { Authorization: "Bearer access_token_foo" },
  queryParams: {},
};

const POST_ARGS_TOKEN_REFRESH = {
  auth: { password: "bar", username: "foo" },
  params: {
    client_id: "foo",
    grant_type: "refresh_token",
    refresh_token: "refresh_token_bar_expired",
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

const AUTH_TOKEN_BADDATA_MOCK: AuthorizationTokenData = {
  access_token: "",
  expires_in: 36000,
  token_type: "Bearer",
  scope: [],
  refresh_token: "",
  patient: "",
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

test("expect fhir queries response with patient, eob, coverage, profile respectively, no token refresh ...", async () => {
  // to verify that token end points not called
  mockedAxios.post.mockImplementation((url) => {
    if (url === BB2_AUTH_TOKEN_URL) {
      return Promise.resolve(AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);
    } else {
      throw Error("Invalid TOKEN end point URL: " + url);
    }
  });

  // mock patient, eob, coverage, profile on url
  mockedAxios.get.mockImplementation((url) => {
    if (url === BB2_PATIENT_URL) {
      return Promise.resolve(patient);
    } else if (url === BB2_COVERAGE_URL) {
      return Promise.resolve(coverage);
    } else if (url === BB2_EOB_URL) {
      return Promise.resolve(eob);
    } else if (url === BB2_PROFILE_URL) {
      return Promise.resolve(profile);
    } else {
      throw Error("Invalid FHIR end point URL: " + url);
    }
  });

  await getFhirResource(
    FhirResourceType.ExplanationOfBenefit,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(200);
    expect(response.data).toEqual(eob.data);
    expect(response.token).toEqual(AUTH_TOKEN_MOCK.getTokenData());
    expect(mockedAxios.get).toHaveBeenCalledWith(BB2_EOB_URL, HEADER_W_TOKEN);
    // no refresh occurred
    expect(mockedAxios.post).toHaveBeenCalledTimes(0);
  });

  await getFhirResource(
    FhirResourceType.Coverage,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(200);
    expect(response.data).toEqual(coverage.data);
    expect(response.token).toEqual(AUTH_TOKEN_MOCK.getTokenData());
    expect(mockedAxios.get).toHaveBeenCalledWith(
      BB2_COVERAGE_URL,
      HEADER_W_TOKEN
    );
    // no refresh occurred
    expect(mockedAxios.post).toHaveBeenCalledTimes(0);
  });

  await getFhirResource(FhirResourceType.Patient, AUTH_TOKEN_MOCK, bb, {}).then(
    (response) => {
      expect(response.status_code).toEqual(200);
      expect(response.data).toEqual(patient.data);
      expect(response.token).toEqual(AUTH_TOKEN_MOCK.getTokenData());
      expect(mockedAxios.get).toHaveBeenCalledWith(
        BB2_PATIENT_URL,
        HEADER_W_TOKEN
      );
      // no refresh occurred
      expect(mockedAxios.post).toHaveBeenCalledTimes(0);
    }
  );

  await getFhirResource(FhirResourceType.Profile, AUTH_TOKEN_MOCK, bb, {}).then(
    (response) => {
      expect(response.status_code).toEqual(200);
      expect(response.data).toEqual(profile.data);
      expect(response.token).toEqual(AUTH_TOKEN_MOCK.getTokenData());
      expect(mockedAxios.get).toHaveBeenCalledWith(
        BB2_PROFILE_URL,
        HEADER_W_TOKEN
      );
      // no refresh occurred
      expect(mockedAxios.post).toHaveBeenCalledTimes(0);
    }
  );
});

test("expect fhir queries with token refreshed ...", async () => {
  // to verify that token refresh called
  mockedAxios.post.mockImplementation((url) => {
    if (url === BB2_AUTH_TOKEN_URL) {
      return Promise.resolve(AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);
    } else {
      throw Error("Invalid TOKEN end point URL: " + url);
    }
  });

  // mock patient, eob, coverage, profile on url
  mockedAxios.get.mockImplementation((url) => {
    if (url === BB2_PATIENT_URL) {
      return Promise.resolve(patient);
    } else if (url === BB2_COVERAGE_URL) {
      return Promise.resolve(coverage);
    } else if (url === BB2_EOB_URL) {
      return Promise.resolve(eob);
    } else if (url === BB2_PROFILE_URL) {
      return Promise.resolve(profile);
    } else {
      throw Error("Invalid FHIR end point URL: " + url);
    }
  });

  await getFhirResource(
    FhirResourceType.Patient,
    AUTH_TOKEN_EXPIRED_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(200);
    expect(response.data).toEqual(patient.data);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      BB2_AUTH_TOKEN_URL,
      {},
      POST_ARGS_TOKEN_REFRESH
    );
    expect(response.token.access_token).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
  });

  await getFhirResource(
    FhirResourceType.ExplanationOfBenefit,
    AUTH_TOKEN_EXPIRED_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(200);
    expect(response.data).toEqual(eob.data);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      BB2_AUTH_TOKEN_URL,
      {},
      POST_ARGS_TOKEN_REFRESH
    );
    expect(response.token.access_token).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
  });

  await getFhirResource(
    FhirResourceType.Coverage,
    AUTH_TOKEN_EXPIRED_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(200);
    expect(response.data).toEqual(coverage.data);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      BB2_AUTH_TOKEN_URL,
      {},
      POST_ARGS_TOKEN_REFRESH
    );
    expect(response.token.access_token).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
  });

  await getFhirResource(
    FhirResourceType.Profile,
    AUTH_TOKEN_EXPIRED_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(200);
    expect(response.data).toEqual(profile.data);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      BB2_AUTH_TOKEN_URL,
      {},
      POST_ARGS_TOKEN_REFRESH
    );
    expect(response.token.access_token).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
  });
});

test("expect fhir queries with token refresh failed ...", async () => {
  // to verify that token refresh called
  mockedAxios.post.mockImplementation((url) => {
    if (url === BB2_AUTH_TOKEN_URL) {
      return Promise.resolve(TOKEN_REFRESH_ERROR_RESPONSE_MOCK);
    } else {
      throw Error("Invalid TOKEN end point URL: " + url);
    }
  });

  // mock patient, eob, coverage, profile on url
  mockedAxios.get.mockImplementation((url) => {
    if (url === BB2_PATIENT_URL) {
      return Promise.resolve(patient);
    } else if (url === BB2_COVERAGE_URL) {
      return Promise.resolve(coverage);
    } else if (url === BB2_EOB_URL) {
      return Promise.resolve(eob);
    } else if (url === BB2_PROFILE_URL) {
      return Promise.resolve(profile);
    } else {
      throw Error("Invalid FHIR end point URL: " + url);
    }
  });

  await expect(
    getFhirResource(FhirResourceType.Patient, AUTH_TOKEN_EXPIRED_MOCK, bb, {})
  ).rejects.toThrow(Error);

  await expect(
    getFhirResource(
      FhirResourceType.ExplanationOfBenefit,
      AUTH_TOKEN_EXPIRED_MOCK,
      bb,
      {}
    )
  ).rejects.toThrow(Error);

  await expect(
    getFhirResource(FhirResourceType.Coverage, AUTH_TOKEN_EXPIRED_MOCK, bb, {})
  ).rejects.toThrow(Error);

  await expect(
    getFhirResource(FhirResourceType.Profile, AUTH_TOKEN_EXPIRED_MOCK, bb, {})
  ).rejects.toThrow(Error);
});

test("expect fhir queries with malformed authToken throw Error ...", async () => {
  await expect(
    getFhirResource(
      FhirResourceType.Patient,
      new AuthorizationToken(AUTH_TOKEN_BADDATA_MOCK),
      bb,
      {}
    )
  ).rejects.toThrow(Errors.GET_FHIR_RESOURCE_INALID_AUTH_TOKEN);
});

test("expect fhir queries error response 'Unable to load data - query FHIR resource error.' on 400 response from FHIR ...", async () => {
  // mock patient, eob, coverage, profile on url
  mockedAxios.get.mockImplementation((url) => {
    if (url === BB2_PATIENT_URL) {
      return Promise.resolve(resourceNotFound);
    } else if (url === BB2_COVERAGE_URL) {
      return Promise.resolve(resourceNotFound);
    } else if (url === BB2_EOB_URL) {
      return Promise.resolve(resourceNotFound);
    } else if (url === BB2_PROFILE_URL) {
      return Promise.resolve(resourceNotFound);
    } else {
      throw Error("Invalid FHIR end point URL: " + url);
    }
  });

  await getFhirResource(FhirResourceType.Patient, AUTH_TOKEN_MOCK, bb, {}).then(
    (response) => {
      expect(response.status_code).toEqual(400);
      expect(response.data).toEqual(resourceNotFound.data);
    }
  );

  await getFhirResource(
    FhirResourceType.Coverage,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(400);
    expect(response.data).toEqual(resourceNotFound.data);
  });

  await getFhirResource(
    FhirResourceType.ExplanationOfBenefit,
    AUTH_TOKEN_MOCK,
    bb,
    {}
  ).then((response) => {
    expect(response.status_code).toEqual(400);
    expect(response.data).toEqual(resourceNotFound.data);
  });

  await getFhirResource(FhirResourceType.Profile, AUTH_TOKEN_MOCK, bb, {}).then(
    (response) => {
      expect(response.status_code).toEqual(400);
      expect(response.data).toEqual(resourceNotFound.data);
    }
  );
});

test("expect fhir queries trigger retry on 500 response, assert retry max attempts reached ...", async () => {
  jest.clearAllMocks();
  mockedAxios.get.mockImplementation((url) => {
    if (url === BB2_PATIENT_URL) {
      return Promise.resolve(Promise.reject(MOCK_RETRYABLE_RESPONSE));
    } else {
      throw Error("Invalid FHIR end point URL: " + url);
    }
  });

  // force shorter retry interval to save time
  retrySettings.initInterval = 1000;

  await getFhirResource(FhirResourceType.Patient, AUTH_TOKEN_MOCK, bb, {}).then(
    (response) => {
      expect(response.status_code).toEqual(500);
      expect(response.data).toEqual(MOCK_RETRYABLE_RESPONSE.response.data);
      // one get plus 3 retry attempts
      expect(mockedAxios.get).toHaveBeenCalledTimes(4);
    }
  );
}, 50000);

// hit non retryable error : not in [500, 502, 503, 504], e.g. 505 ver not supported
test("expect fhir queries return response on non-retryable error, assert retry not attempted ...", async () => {
  jest.clearAllMocks();
  mockedAxios.get.mockImplementation((url) => {
    if (url === BB2_PATIENT_URL) {
      return Promise.resolve(Promise.reject(MOCK_NON_RETRYABLE_RESPONSE));
    } else {
      throw Error("Invalid FHIR end point URL: " + url);
    }
  });

  try {
    await getFhirResource(FhirResourceType.Patient, AUTH_TOKEN_MOCK, bb, {});
  } catch (error: any) {
    expect(error).toEqual(MOCK_NON_RETRYABLE_RESPONSE);
    // one get plus 0 retry attempts
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  }
});

test("expect fhir queries trigger retry on retryable error, assert retry attempted once and succeeded ...", async () => {
  jest.clearAllMocks();
  mockedAxios.get
    .mockRejectedValueOnce(MOCK_RETRYABLE_RESPONSE)
    .mockRejectedValueOnce(MOCK_RETRYABLE_RESPONSE)
    .mockResolvedValueOnce(patient);

  // force shorter retry interval to save time
  retrySettings.initInterval = 1000;

  await getFhirResource(FhirResourceType.Patient, AUTH_TOKEN_MOCK, bb, {}).then(
    (response) => {
      expect(response.status_code).toEqual(200);
      expect(response.data).toEqual(patient.data);
      // first get plus 1 errored attempt plus 1 succeeded attempt
      expect(mockedAxios.get).toHaveBeenCalledTimes(3);
    }
  );
}, 20000);
