import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

import BlueButton from ".";
import { Errors } from ".";

import { generateTokenPostData } from "./auth";
import { SDK_HEADERS } from "./enums/environments";

// Setup BlueButton class instance
const CLIENT_ID = "foo";
const CLIENT_SECRET = "bar";
const CALLBACK_URL = "http://localhost/callback/";
const BASE_AUTH_URL = "https://sandbox.bluebutton.cms.gov/v2/o/authorize";

const bb = new BlueButton({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackUrl: CALLBACK_URL,
});

describe("auth method generateAuthData()", () => {
  const AuthData = bb.generateAuthData();

  it("expect codeChallenge length != 0", () => {
    expect(AuthData.codeChallenge).not.toHaveLength(0);
  });

  it("expect verifier length != 0", () => {
    expect(AuthData.verifier).not.toHaveLength(0);
  });

  it("expect state length != 0", () => {
    expect(AuthData.state).not.toHaveLength(0);
  });
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

describe("auth method getAuthorizationToken", () => {
  // Reset mocks after each test.
  afterEach(() => {
    jest.resetAllMocks();
  });

  const authData = bb.generateAuthData();

  const BB2_ACCESS_TOKEN_URL = `${bb.baseUrl}/v${bb.version}/o/token/`;

  const mockResponseData = {
    access_token: "66ClP4JCjpdxmkC6bEKYQFLOWXnraJ",
    expires_in: 36000,
    token_type: "Bearer",
    scope: [
      "introspection",
      "patient/Coverage.read",
      "patient/ExplanationOfBenefit.read",
      "patient/Patient.read",
      "profile",
    ],
    refresh_token: "jV3knA4xmZ1enK8Rg1Lub5hmIsc9Ad",
    patient: "-20140000000051",
    expires_at: 1646195004.3654683,
  };

  const mockResponse = {
    status: 200,
    data: mockResponseData,
  };

  const mockResponseDataMissingExpiresAt = {
    access_token: "66ClP4JCjpdxmkC6bEKYQFLOWXnraJ",
    expires_in: 36000,
    token_type: "Bearer",
    scope: [
      "introspection",
      "patient/Coverage.read",
      "patient/ExplanationOfBenefit.read",
      "patient/Patient.read",
      "profile",
    ],
    refresh_token: "jV3knA4xmZ1enK8Rg1Lub5hmIsc9Ad",
    patient: "-20140000000051",
  };

  const mockResponseMissingExpiresAt = {
    status: 200,
    data: mockResponseDataMissingExpiresAt,
  };

  const expectedAuthTokenJsonStringListBase = [
    expect.stringContaining('"accessToken":"66ClP4JCjpdxmkC6bEKYQFLOWXnraJ"'),
    expect.stringContaining('"expiresIn":36000,'),
    expect.stringContaining('"patient":"-20140000000051",'),
    expect.stringContaining('"refreshToken":"jV3knA4xmZ1enK8Rg1Lub5hmIsc9Ad",'),
    expect.stringContaining(
      '"scope":[' +
        '"introspection",' +
        '"patient/Coverage.read",' +
        '"patient/ExplanationOfBenefit.read",' +
        '"patient/Patient.read",' +
        '"profile"],'
    ),
    expect.stringContaining('"tokenType":"Bearer"'),
  ];

  it("expect successful response", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const ret = await bb.getAuthorizationToken(
      authData,
      "test-code",
      authData.state,
      "test-error"
    );

    const expectedAuthTokenJsonStringList =
      expectedAuthTokenJsonStringListBase.concat(
        expect.stringContaining('"expiresAt":1646195004.3654683,')
      );

    // Check json items are in response
    expectedAuthTokenJsonStringList.forEach((item) => {
      expect(JSON.stringify(ret)).toEqual(item);
    });
    expect(axios.post).toHaveBeenCalledWith(
      BB2_ACCESS_TOKEN_URL,
      expect.anything(),
      { headers:SDK_HEADERS }
    );
  });

  it("expect successful response with missing expires_at", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponseMissingExpiresAt);

    const ret = await bb.getAuthorizationToken(
      authData,
      "test-code",
      authData.state,
      "test-error"
    );

    const expectedAuthTokenJsonStringList =
      expectedAuthTokenJsonStringListBase.concat(
        // Just match partial time since generated whole value is different each time.
        expect.stringContaining('"expiresAt":')
      );

    // Check json items are in response
    expectedAuthTokenJsonStringList.forEach((item) => {
      expect(JSON.stringify(ret)).toEqual(item);
    });

    expect(axios.post).toHaveBeenCalledWith(
      BB2_ACCESS_TOKEN_URL,
      expect.anything(),
      { headers: SDK_HEADERS  }
    );
  });

  it("expect missing error param does not error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const ret = await bb.getAuthorizationToken(
      authData,
      "test-code",
      authData.state,
      undefined
    );

    const expectedAuthTokenJsonStringList =
      expectedAuthTokenJsonStringListBase.concat(
        expect.stringContaining('"expiresAt":1646195004.3654683,')
      );

    // Check json items are in response
    expectedAuthTokenJsonStringList.forEach((item) => {
      expect(JSON.stringify(ret)).toEqual(item);
    });
  });

  it("expect missing code param has error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      /* eslint-disable  @typescript-eslint/no-unused-vars */
      const ret = await bb.getAuthorizationToken(
        authData,
        undefined,
        "test-state",
        "test-error"
      );
      /* eslint-enable @typescript-eslint/no-unused-vars */
    }).rejects.toThrow(Errors.CALLBACK_ACCESS_CODE_MISSING);
  });

  it("expect missing state param has error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      /* eslint-disable  @typescript-eslint/no-unused-vars */
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        undefined,
        "test-error"
      );
      /* eslint-enable @typescript-eslint/no-unused-vars */
    }).rejects.toThrow(Errors.CALLBACK_STATE_MISSING);
  });

  it("expect state param does not match AuthData state", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      /* eslint-disable  @typescript-eslint/no-unused-vars */
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        "test-state-does-not-match",
        "test-error"
      );
      /* eslint-enable @typescript-eslint/no-unused-vars */
    }).rejects.toThrow(Errors.CALLBACK_STATE_DOES_NOT_MATCH);
  });

  it("expect access denied error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      /* eslint-disable  @typescript-eslint/no-unused-vars */
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        "test-state",
        "access_denied"
      );
      /* eslint-enable @typescript-eslint/no-unused-vars */
    }).rejects.toThrow(Errors.CALLBACK_ACCESS_DENIED);
  });

  it("expect token response data missing ", async () => {
    const mockResponse = {
      status: 200,
    };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      /* eslint-disable  @typescript-eslint/no-unused-vars */
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
      /* eslint-enable @typescript-eslint/no-unused-vars */
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_RESPONSE_DATA_MISSING);
  });
});
