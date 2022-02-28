import BlueButton from ".";

import { generateTokenPostData } from "./auth";

import { Errors } from "./enums/error_codes";

// Setup BlueButton class instance
const CLIENT_ID = "foo";
const CLIENT_SECRET = "bar";
const CALLBACK_URL = "http://localhost/callback/";
const bb = new BlueButton({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackUrl: CALLBACK_URL,
});

// TEST CONSTANTS
const BASE_AUTH_URL: string =
  "https://sandbox.bluebutton.cms.gov/2/o/authorize";

test("expect auth method generateAuthData() returns values", () => {
  const AuthData = bb.generateAuthData();

  expect(AuthData.codeChallenge).not.toHaveLength(0);
  expect(AuthData.verifier).not.toHaveLength(0);
  expect(AuthData.state).not.toHaveLength(0);
});

test("expect auth method generateAuthorizeUrl()", () => {
  const AuthData = bb.generateAuthData();

  const expectedUrl: string =
    `${BASE_AUTH_URL}?client_id=${CLIENT_ID}` +
    `&redirect_uri=${CALLBACK_URL}&state=${AuthData.state}` +
    `&response_type=code&code_challenge_method=S256&code_challenge=${AuthData.codeChallenge}`;

  const url = bb.generateAuthorizeUrl(AuthData);

  expect(url).toBe(expectedUrl);
});

test("expect auth method generateTokenPostData() function", () => {
  const AuthData = bb.generateAuthData();

  const expectedPostData = {
    client_id: "foo",
    client_secret: "bar",
    code: "test-code",
    code_challenge: AuthData.codeChallenge,
    code_verifier: AuthData.verifier,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost/callback/",
  };

  const postData = generateTokenPostData(bb, AuthData, "test-code");

  expect(postData).toStrictEqual(expectedPostData);
});

test("expect auth method getAccessToken method validate request params", () => {
  const authData = bb.generateAuthData();

  // Test valid values does not thow an error
  expect(() => {
    bb.getAccessToken(authData, "test-code", authData.state, "test-error");
  }).not.toThrow(Error);

  // Test valid values & missing error does not thow an error
  expect(() => {
    bb.getAccessToken(authData, "test-code", authData.state, undefined);
  }).not.toThrow(Error);

  // Test missing code parameter
  expect(() => {
    bb.getAccessToken(authData, undefined, "test-state", "test-error");
  }).toThrow(Errors.CALLBACK_ACCESS_CODE_MISSING);

  // Test missing state parameter
  expect(() => {
    bb.getAccessToken(authData, "test-code", undefined, "test-error");
  }).toThrow(Errors.CALLBACK_STATE_MISSING);

  // Test if state does not match
  expect(() => {
    bb.getAccessToken(
      authData,
      "test-code",
      "test-state-does-not-match",
      "test-error"
    );
  }).toThrow("Provided callback state does not match AuthData state");

  // Test access denied error value
  expect(() => {
    bb.getAccessToken(authData, "test-code", "test-state", "access_denied");
  }).toThrow(Errors.CALLBACK_ACCESS_DENIED);
});
