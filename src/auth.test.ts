import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

import BlueButton from ".";
import { generateTokenPostData } from "./auth";
import { AuthorizationToken } from "./entities/AuthorizationToken";
import { Errors } from "./enums/errors";

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

  const BB2_ACCESS_TOKEN_URL = bb.baseUrl + "/" + bb.version + "/o/token/";

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

  it("expect successful response", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      const expectedAuthToken = new AuthorizationToken(mockResponse.data);

      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        "test-error"
      );

      expect(ret).toEqual(expectedAuthToken);
    }).not.toThrow(Error);

    expect(axios.post).toHaveBeenCalledWith(
      BB2_ACCESS_TOKEN_URL,
      expect.anything()
    );
  });

  it("expect successful response with missing expires_at", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponseMissingExpiresAt);

    await expect(async () => {
      const expectedAuthToken = new AuthorizationToken(
        mockResponseMissingExpiresAt.data
      );

      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        "test-error"
      );
    }).not.toThrow(Error);

    expect(axios.post).toHaveBeenCalledWith(
      BB2_ACCESS_TOKEN_URL,
      expect.anything()
    );
  });

  it("expect missing error param does not error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).not.toThrow(Error);
  });
  it("expect missing code param has error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        undefined,
        "test-state",
        "test-error"
      );
    }).rejects.toThrow(Errors.CALLBACK_ACCESS_CODE_MISSING);
  });

  it("expect missing state param has error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        undefined,
        "test-error"
      );
    }).rejects.toThrow(Errors.CALLBACK_STATE_MISSING);
  });

  it("expect state param does not match AuthData state", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        "test-state-does-not-match",
        "test-error"
      );
    }).rejects.toThrow(Errors.CALLBACK_STATE_DOES_NOT_MATCH);
  });

  it("expect access denied error", async () => {
    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        "test-state",
        "access_denied"
      );
    }).rejects.toThrow(Errors.CALLBACK_ACCESS_DENIED);
  });

  it("expect token endpoint 400 status", async () => {
    const mockResponse = {
      status: 400,
      data: {},
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_STATUS_400);
    expect(bb.getAuthResponseStatusCode()).toEqual(400);
  });

  it("expect token endpoint 403 status", async () => {
    const mockResponse = {
      status: 403,
      data: {},
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_STATUS_403);
    expect(bb.getAuthResponseStatusCode()).toEqual(403);
  });

  it("expect token endpoint 404 status", async () => {
    const mockResponse = {
      status: 404,
      data: {},
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_STATUS_404);
    expect(bb.getAuthResponseStatusCode()).toEqual(404);
  });

  it("expect token endpoint 500 status", async () => {
    const mockResponse = {
      status: 500,
      data: {},
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_STATUS_500);
    expect(bb.getAuthResponseStatusCode()).toEqual(500);
  });

  it("expect token endpoint 502 status", async () => {
    const mockResponse = {
      status: 502,
      data: {},
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_STATUS_502);
    expect(bb.getAuthResponseStatusCode()).toEqual(502);
  });

  it("expect token endpoint 999 not expected status", async () => {
    const mockResponse = {
      status: 999,
      data: {},
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_STATUS_NOT_EXPECTED);
    expect(bb.getAuthResponseStatusCode()).toEqual(999);
  });

  it("expect token response data missing ", async () => {
    const mockResponse = {
      status: 200,
    };

    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    await expect(async () => {
      const ret = await bb.getAuthorizationToken(
        authData,
        "test-code",
        authData.state,
        undefined
      );
    }).rejects.toThrow(Errors.AUTH_TOKEN_URL_RESPONSE_DATA_MISSING);
    expect(bb.getAuthResponseStatusCode()).toEqual(200);
  });
});
