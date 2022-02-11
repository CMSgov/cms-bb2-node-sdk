import { createImportEqualsDeclaration } from "typescript";
import BlueButton from ".";

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
