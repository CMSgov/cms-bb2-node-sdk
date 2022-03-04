import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import BlueButton from ".";
import {
  getResource,
  FhirRequest,
  FhirResourceType,
  AuthorizationToken,
} from "./resource";

const eob = { resource: "EOB" };
const patient = { resource: "Patient" };
const coverage = { resource: "Coverage" };
const profile = { resource: "Profile" };

const AUTH_TOKEN_MOCK = new AuthorizationToken({
  access_token: "access_token_foo",
  expires_in: 36000,
  token_type: "Bearer",
  scope: "scope1 scope2 scope3",
  refresh_token: "refresh_token_bar",
  patient: "-19990000000001",
});

const AUTH_TOKEN_REFRESHED_RESPONSE_MOCK = {
  access_token: "access_token_foo_refreshed",
  expires_in: 36000,
  token_type: "Bearer",
  scope: "scope1 scope2 scope3",
  refresh_token: "refresh_token_bar_refreshed",
  patient: "-19990000000001",
};

const AUTH_TOKEN_REFRESHED_MOCK = new AuthorizationToken(
  AUTH_TOKEN_REFRESHED_RESPONSE_MOCK
);

const AUTH_TOKEN_EXPIRED_MOCK = new AuthorizationToken({
  access_token: "access_token_foo_expired",
  expires_in: -36000,
  token_type: "Bearer",
  scope: "scope1 scope2 scope3",
  refresh_token: "refresh_token_bar_expired",
  patient: "-19990000000001",
});

const TOKEN_REFRESH_ERROR_MOCK = { text: "Unauthorized operation!" };

const GENERAL_ERR_JSON = {
  message: "Unable to load data - query FHIR resource error.",
};

test("expect fhir queries response with patient, eob, coverage, profile respectively, no token refresh ...", async () => {
  const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

  const fhirReqForPatient = new FhirRequest(
    FhirResourceType.Patient,
    {},
    AUTH_TOKEN_MOCK,
    bb
  );
  const fhirReqForEOB = new FhirRequest(
    FhirResourceType.ExplanationOfBenefit,
    {},
    AUTH_TOKEN_MOCK,
    bb
  );
  const fhirReqForCoverge = new FhirRequest(
    FhirResourceType.Coverage,
    {},
    AUTH_TOKEN_MOCK,
    bb
  );
  const fhirReqForProfile = new FhirRequest(
    FhirResourceType.Profile,
    {},
    AUTH_TOKEN_MOCK,
    bb
  );

  const mock = new MockAdapter(axios);

  mock
    .onPost(fhirReqForPatient.BB2_AUTH_TOKEN_URL)
    .reply(200, AUTH_TOKEN_REFRESHED_MOCK);
  mock.onGet(fhirReqForPatient.BB2_PATIENT_URL).reply(200, patient);
  mock.onGet(fhirReqForEOB.BB2_EOB_URL).reply(200, eob);
  mock.onGet(fhirReqForCoverge.BB2_COVERAGE_URL).reply(200, coverage);
  mock.onGet(fhirReqForProfile.BB2_PROFILE_URL).reply(200, profile);

  await getResource(fhirReqForPatient).then((response) => {
    expect(response).toEqual(patient);
    expect(fhirReqForPatient.getData()).toEqual(patient);
    expect(fhirReqForPatient.getAuthToken()).toEqual(AUTH_TOKEN_MOCK);
  });

  await getResource(fhirReqForEOB).then((response) => {
    expect(response).toEqual(eob);
    expect(fhirReqForEOB.getData()).toEqual(eob);
    expect(fhirReqForEOB.getAuthToken()).toEqual(AUTH_TOKEN_MOCK);
  });

  await getResource(fhirReqForCoverge).then((response) => {
    expect(response).toEqual(coverage);
    expect(fhirReqForCoverge.getData()).toEqual(coverage);
    expect(fhirReqForCoverge.getAuthToken()).toEqual(AUTH_TOKEN_MOCK);
  });

  await getResource(fhirReqForProfile).then((response) => {
    expect(response).toEqual(profile);
    expect(fhirReqForProfile.getData()).toEqual(profile);
    expect(fhirReqForProfile.getAuthToken()).toEqual(AUTH_TOKEN_MOCK);
  });
});

test("expect fhir queries with token refreshed ...", async () => {
  const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

  const fhirReqForPatient = new FhirRequest(
    FhirResourceType.Patient,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );
  const fhirReqForEOB = new FhirRequest(
    FhirResourceType.ExplanationOfBenefit,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );
  const fhirReqForCoverge = new FhirRequest(
    FhirResourceType.Coverage,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );
  const fhirReqForProfile = new FhirRequest(
    FhirResourceType.Profile,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );

  const mock = new MockAdapter(axios);

  mock
    .onPost(fhirReqForPatient.BB2_AUTH_TOKEN_URL)
    .reply(200, AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);
  mock
    .onPost(fhirReqForEOB.BB2_AUTH_TOKEN_URL)
    .reply(200, AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);
  mock
    .onPost(fhirReqForCoverge.BB2_AUTH_TOKEN_URL)
    .reply(200, AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);
  mock
    .onPost(fhirReqForProfile.BB2_AUTH_TOKEN_URL)
    .reply(200, AUTH_TOKEN_REFRESHED_RESPONSE_MOCK);

  mock.onGet(fhirReqForPatient.BB2_PATIENT_URL).reply(200, patient);
  mock.onGet(fhirReqForEOB.BB2_EOB_URL).reply(200, eob);
  mock.onGet(fhirReqForCoverge.BB2_COVERAGE_URL).reply(200, coverage);
  mock.onGet(fhirReqForProfile.BB2_PROFILE_URL).reply(200, profile);

  await getResource(fhirReqForPatient).then((response) => {
    expect(response).toEqual(patient);
    expect(fhirReqForPatient.getAuthToken().accessToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
    expect(fhirReqForPatient.getAuthToken().expiresIn).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.expiresIn
    );
    expect(fhirReqForPatient.getAuthToken().scope).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.scope
    );
    expect(fhirReqForPatient.getAuthToken().refreshToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.refreshToken
    );
    expect(fhirReqForPatient.getAuthToken().tokenType).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.tokenType
    );
  });

  await getResource(fhirReqForEOB).then((response) => {
    expect(response).toEqual(eob);
    expect(fhirReqForEOB.getAuthToken().accessToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
    expect(fhirReqForEOB.getAuthToken().expiresIn).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.expiresIn
    );
    expect(fhirReqForEOB.getAuthToken().scope).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.scope
    );
    expect(fhirReqForEOB.getAuthToken().refreshToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.refreshToken
    );
    expect(fhirReqForEOB.getAuthToken().tokenType).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.tokenType
    );
  });

  await getResource(fhirReqForCoverge).then((response) => {
    expect(response).toEqual(coverage);
    expect(fhirReqForCoverge.getAuthToken().accessToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
    expect(fhirReqForCoverge.getAuthToken().expiresIn).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.expiresIn
    );
    expect(fhirReqForCoverge.getAuthToken().scope).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.scope
    );
    expect(fhirReqForCoverge.getAuthToken().refreshToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.refreshToken
    );
    expect(fhirReqForCoverge.getAuthToken().tokenType).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.tokenType
    );
  });

  await getResource(fhirReqForProfile).then((response) => {
    expect(response).toEqual(profile);
    expect(fhirReqForProfile.getAuthToken().accessToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.accessToken
    );
    expect(fhirReqForProfile.getAuthToken().expiresIn).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.expiresIn
    );
    expect(fhirReqForProfile.getAuthToken().scope).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.scope
    );
    expect(fhirReqForProfile.getAuthToken().refreshToken).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.refreshToken
    );
    expect(fhirReqForProfile.getAuthToken().tokenType).toEqual(
      AUTH_TOKEN_REFRESHED_MOCK.tokenType
    );
  });
});

test("expect fhir queries with token refresh failed ...", async () => {
  const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

  const fhirReqForPatient = new FhirRequest(
    FhirResourceType.Patient,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );
  const fhirReqForEOB = new FhirRequest(
    FhirResourceType.ExplanationOfBenefit,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );
  const fhirReqForCoverge = new FhirRequest(
    FhirResourceType.Coverage,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );
  const fhirReqForProfile = new FhirRequest(
    FhirResourceType.Profile,
    {},
    AUTH_TOKEN_EXPIRED_MOCK,
    bb
  );

  const mock = new MockAdapter(axios);

  mock
    .onPost(fhirReqForPatient.BB2_AUTH_TOKEN_URL)
    .reply(401, TOKEN_REFRESH_ERROR_MOCK);
  mock
    .onPost(fhirReqForEOB.BB2_AUTH_TOKEN_URL)
    .reply(401, TOKEN_REFRESH_ERROR_MOCK);
  mock
    .onPost(fhirReqForCoverge.BB2_AUTH_TOKEN_URL)
    .reply(401, TOKEN_REFRESH_ERROR_MOCK);
  mock
    .onPost(fhirReqForProfile.BB2_AUTH_TOKEN_URL)
    .reply(401, TOKEN_REFRESH_ERROR_MOCK);

  mock.onGet(fhirReqForPatient.BB2_PATIENT_URL).reply(200, patient);
  mock.onGet(fhirReqForEOB.BB2_EOB_URL).reply(200, eob);
  mock.onGet(fhirReqForCoverge.BB2_COVERAGE_URL).reply(200, coverage);
  mock.onGet(fhirReqForProfile.BB2_PROFILE_URL).reply(200, profile);

  await expect(getResource(fhirReqForPatient)).rejects.toThrow(Error);

  await expect(getResource(fhirReqForEOB)).rejects.toThrow(Error);

  await expect(getResource(fhirReqForCoverge)).rejects.toThrow(Error);

  await expect(getResource(fhirReqForProfile)).rejects.toThrow(Error);
});

test("expect fhir queries with malformed authToken throw Error ...", async () => {
  const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

  const fhirReqForPatient = new FhirRequest(
    FhirResourceType.Patient,
    {},
    new AuthorizationToken({}),
    bb
  );

  const mock = new MockAdapter(axios);

  mock.onGet(fhirReqForPatient.BB2_PATIENT_URL).reply(200, patient);

  await expect(getResource(fhirReqForPatient)).rejects.toThrow(
    "Invalid authorization token."
  );
});

test("expect fhir queries error response 'Unable to load data - query FHIR resource error.' on 400 response from FHIR ...", async () => {
  const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

  const fhirReqForPatient = new FhirRequest(
    FhirResourceType.Patient,
    {},
    AUTH_TOKEN_MOCK,
    bb
  );

  const mock = new MockAdapter(axios);

  mock
    .onGet(fhirReqForPatient.BB2_PATIENT_URL)
    .reply(400, { details: "Not found" });

  await getResource(fhirReqForPatient).then((response) => {
    expect(response).toEqual(GENERAL_ERR_JSON);
    expect(fhirReqForPatient.getStatusCode()).toEqual(400);
    expect(fhirReqForPatient.getError()).toEqual(GENERAL_ERR_JSON);
  });
});

test("expect fhir queries trigger retry on 500 response ...", async () => {
  const bb = new BlueButton(`${__dirname}/testConfigs/.bluebutton-config.json`);

  const fhirReqForPatient = new FhirRequest(
    FhirResourceType.Patient,
    {},
    AUTH_TOKEN_MOCK,
    bb
  );

  const mock = new MockAdapter(axios);

  mock
    .onGet(fhirReqForPatient.BB2_PATIENT_URL)
    .reply(500, { error: "unexpected error" });

  await getResource(fhirReqForPatient).then((response) => {
    expect(response).toEqual({
      message: "Unable to load data - query FHIR resource error.",
    });
  });
}, 50000);
