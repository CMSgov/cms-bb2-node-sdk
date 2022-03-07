/*
auth.ts - Provides auth related methods for the Bluebutton class
*/
import axios from "axios";
import crypto from "crypto";

import BlueButton from ".";
import { AuthorizationToken } from "./entities/AuthorizationToken";
import { Errors } from "./enums/errors";

type PkceData = {
  codeChallenge: string;
  verifier: string;
};

function base64URLEncode(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function sha256(str: string): Buffer {
  return crypto.createHash("sha256").update(str).digest();
}

function generatePkceData(): PkceData {
  var verifier = base64URLEncode(crypto.randomBytes(32));
  return {
    codeChallenge: base64URLEncode(sha256(verifier)),
    verifier: verifier,
  };
}

function generateRandomState(): string {
  return base64URLEncode(crypto.randomBytes(32));
}

export type AuthData = {
  codeChallenge: string;
  verifier: string;
  state: string;
};

export type TokenPostData = {
  client_id: string;
  client_secret: string;
  code?: string;
  grant_type: string;
  redirect_uri: string;
  code_verifier: string;
  code_challenge: string;
};

export function generateAuthData(): AuthData {
  const PkceData = generatePkceData();
  return {
    codeChallenge: PkceData.codeChallenge,
    verifier: PkceData.verifier,
    state: generateRandomState(),
  };
}

export function generateAuthorizeUrl(
  bb: BlueButton,
  AuthData: AuthData
): string {
  const pkceParams = `code_challenge_method=S256&code_challenge=${AuthData.codeChallenge}`;

  return `${bb.getAuthorizationUrl()}?client_id=${bb.clientId}&redirect_uri=${
    bb.callbackUrl
  }&state=${AuthData.state}&response_type=code&${pkceParams}`;
}

//  Generates post data for call to access token URL
export function generateTokenPostData(
  bb: BlueButton,
  authData: AuthData,
  callbackCode?: string
): TokenPostData {
  return {
    client_id: bb.clientId,
    client_secret: bb.clientSecret,
    code: callbackCode,
    grant_type: "authorization_code",
    redirect_uri: bb.callbackUrl,
    code_verifier: authData.verifier,
    code_challenge: authData.codeChallenge,
  };
}

function validateCallbackRequestQueryParams(
  AuthData: AuthData,
  callbackCode?: string,
  callbackState?: string,
  callbackError?: string
) {
  // Check state from callback here?
  if (callbackError === "access_denied") {
    throw new Error(Errors.CALLBACK_ACCESS_DENIED);
  }

  if (!callbackCode) {
    throw new Error(Errors.CALLBACK_ACCESS_CODE_MISSING);
  }

  if (!callbackState) {
    throw new Error(Errors.CALLBACK_STATE_MISSING);
  }

  if (callbackState != AuthData.state) {
    throw new Error(Errors.CALLBACK_STATE_DOES_NOT_MATCH);
  }
}

// Get an access token from callback code & state
export async function getAuthorizationToken(
  bb: BlueButton,
  AuthData: AuthData,
  callbackRequestCode?: string,
  callbackRequestState?: string,
  callbackRequestError?: string
) {
  validateCallbackRequestQueryParams(
    AuthData,
    callbackRequestCode,
    callbackRequestState,
    callbackRequestError
  );

  const postData = generateTokenPostData(bb, AuthData, callbackRequestCode);

  const resp = await axios.post(bb.getAccessTokenUrl(), postData);

  if (resp.data) {
    const authToken = new AuthorizationToken(resp.data);
    return authToken;
  } else {
    throw Error(Errors.AUTH_TOKEN_URL_RESPONSE_DATA_MISSING);
  }
}
