import BlueButton from ".";

// Setup BlueButton class instance
const CLIENT_ID = "foo";
const CLIENT_SECRET = "bar";
const bb = new BlueButton({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

// TEST CONSTANTS
const INIT_BASE_AUTH_URL: string =
  "https://sandbox.bluebutton.cms.gov/2/o/authorize?";
const INIT_CALLBACK_URL: string = "http://localhost/callback/";
const NEW_CALLBACK_URL: string = "http://localhost/newcallback/";

test("expect auth method generateAuthorizeUrl() w/o PKCE after init", () => {
  // Turn off PKCE
  bb.usePKCE = false;

  // test generate of url
  bb.generateAuthorizeUrl();

  var expectedUrl: string =
    INIT_BASE_AUTH_URL +
    "client_id=" +
    CLIENT_ID +
    "&redirect_uri=" +
    INIT_CALLBACK_URL +
    "&state=" +
    bb.state +
    "&response_type=code";

  expect(bb.authorizeUrl).toBe(expectedUrl);
});

test("expect auth method generateAuthorizeUrl() re-generate has new state", () => {
  const lastState = bb.state;

  // test state change after regenerate
  bb.generateAuthorizeUrl();

  expect(bb.state).not.toBe(lastState);
});

test("expect auth method setCallBackUrl() updates callBackUrl", () => {
  bb.setCallBackUrl(NEW_CALLBACK_URL);
  expect(bb.callBackUrl).toBe(NEW_CALLBACK_URL);
});

test("expect auth method generateAuthorizeUrl() with PKCE after regenerate", () => {
  // Turn on PKCE
  bb.usePKCE = true;

  bb.generateAuthorizeUrl();

  var expectedUrl: string =
    INIT_BASE_AUTH_URL +
    "client_id=" +
    CLIENT_ID +
    "&redirect_uri=" +
    NEW_CALLBACK_URL +
    "&state=" +
    bb.state +
    "&response_type=code" +
    "&code_challenge_method=S256" +
    "&code_challenge=" +
    bb.codeChallenge.codeChallenge;

  expect(bb.authorizeUrl).toBe(expectedUrl);
});
