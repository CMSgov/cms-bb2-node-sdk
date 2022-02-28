/*
auth.ts - Provides auth related methods for the Bluebutton class
*/
import crypto from "crypto";

import BlueButton from ".";

import { Errors } from "./enums/error_codes";

import { AuthData, TokenPostData } from "./types/auth";

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

type PkceData = {
  codeChallenge: string;
  verifier: string;
};

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
  const BB2_AUTH_URL = bb.baseUrl + "/" + bb.version + "/o/authorize";

  const pkceParams = `code_challenge_method=S256&code_challenge=${AuthData.codeChallenge}`;

  return `${BB2_AUTH_URL}?client_id=${bb.clientId}&redirect_uri=${bb.callBackUrl}&state=${AuthData.state}&response_type=code&${pkceParams}`;
}

//  Generates post data for call to access token URL
export function generateTokenPostData(
  bb: BlueButton,
  AuthData: AuthData,
  code: string,
  callBackState: string
): TokenPostData {
  // Check state from callback here?
  if (callBackState != AuthData.state) {
    throw new Error("Provided callback state does not match AuthData state.");
  }

  const BB2_ACCESS_TOKEN_URL = bb.baseUrl + "/" + bb.version + "/o/token/";

  return {
    client_id: bb.clientId,
    client_secret: bb.clientSecret,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: bb.callBackUrl,
    code_verifier: AuthData.verifier,
    code_challenge: AuthData.codeChallenge,
  };
}

export function validateCallBackRequestQueryParams(
  code: string | undefined,
  state: string | undefined,
  error: string | undefined
) {
  if (error === "access_denied") {
    throw new Error(Errors.CALLBACK_ACCESS_DENIED);
  }

  if (!code) {
    throw new Error(Errors.CALLBACK_ACCESS_CODE_MISSING);
  }

  if (!state) {
    throw new Error(Errors.CALLBACK_STATE_MISSING);
  }
}
