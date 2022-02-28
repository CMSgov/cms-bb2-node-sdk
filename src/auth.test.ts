import BlueButton from ".";

import { Errors } from "./enums/error_codes";

// Setup BlueButton class instance
const CLIENT_ID = "foo";
const CLIENT_SECRET = "bar";
const CALLBACK_URL = "http://localhost/callback/";
const bb = new BlueButton({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callBackUrl: CALLBACK_URL,
});

// TEST CONSTANTS
const BASE_AUTH_URL: string =
  "https://sandbox.bluebutton.cms.gov/2/o/authorize";

test("expect auth method generateAuthData() returns values", () => {
  const authData = bb.generateAuthData();

  expect(authData.codeChallenge).not.toHaveLength(0);
  expect(authData.verifier).not.toHaveLength(0);
  expect(authData.state).not.toHaveLength(0);
});

test("expect auth method generateAuthorizeUrl()", () => {
  const authData = bb.generateAuthData();

  const expectedUrl: string =
    `${BASE_AUTH_URL}?client_id=${CLIENT_ID}` +
    `&redirect_uri=${CALLBACK_URL}&state=${authData.state}` +
    `&response_type=code&code_challenge_method=S256&code_challenge=${authData.codeChallenge}`;

  const url = bb.generateAuthorizeUrl(authData);

  expect(url).toBe(expectedUrl);
});

test("expect auth method generateTokenPostData()", () => {
  const authData = bb.generateAuthData();

  const expectedPostData = {
    client_id: "foo",
    client_secret: "bar",
    code: "test-code",
    code_challenge: authData.codeChallenge,
    code_verifier: authData.verifier,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost/callback/",
  };

  const postData = bb.generateTokenPostData(
    authData,
    "test-code",
    authData.state
  );

  expect(postData).toStrictEqual(expectedPostData);

  // Test if state does not match
  expect(() => {
    bb.generateTokenPostData(
      authData,
      "test-code",
      "test-state-does-not-match"
    );
  }).toThrow("Provided callback state does not match authData state.");
});

test("expect auth method validateCallBackRequestQueryParams()", () => {
  // Test valid values does not thow an error
  expect(() => {
    bb.validateCallBackRequestQueryParams(
      "test-code",
      "test-state",
      "test-error"
    );
  }).not.toThrow(Error);

  // Test valid values & missing error does not thow an error
  expect(() => {
    bb.validateCallBackRequestQueryParams("test-code", "test-state", undefined);
  }).not.toThrow(Error);

  // Test missing code parameter
  expect(() => {
    bb.validateCallBackRequestQueryParams(
      undefined,
      "test-state",
      "test-error"
    );
  }).toThrow(Errors.CALLBACK_ACCESS_CODE_MISSING);

  // Test missing state parameter
  expect(() => {
    bb.validateCallBackRequestQueryParams("test-code", undefined, "test-error");
  }).toThrow(Errors.CALLBACK_STATE_MISSING);

  // Test valid values does not thow an error
  expect(() => {
    bb.validateCallBackRequestQueryParams(
      "test-code",
      "test-state",
      "access_denied"
    );
  }).toThrow(Errors.CALLBACK_ACCESS_DENIED);
});
