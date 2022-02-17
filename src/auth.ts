/*
auth.ts - Provides auth related methods for the Bluebutton class
*/
import crypto from "crypto";

import BlueButton from ".";
import { authData, tokenPostData } from "./types/auth";

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

type pkceData = {
  codeChallenge: string;
  verifier: string;
};

function generatePkceData(): pkceData {
  var verifier = base64URLEncode(crypto.randomBytes(32));
  return {
    codeChallenge: base64URLEncode(sha256(verifier)),
    verifier: verifier,
  };
}

function generateRandomState(): string {
  return base64URLEncode(crypto.randomBytes(32));
}

export function generateAuthData(): authData {
  const pkceData = generatePkceData();
  return {
    codeChallenge: pkceData.codeChallenge,
    verifier: pkceData.verifier,
    state: generateRandomState(),
  };
}

export function generateAuthorizeUrl(
  bb: BlueButton,
  authData: authData
): string {
  const BB2_AUTH_URL = bb.baseUrl + "/" + bb.version + "/o/authorize";

  const pkceParams = `code_challenge_method=S256&code_challenge=${authData.codeChallenge}`;

  return `${BB2_AUTH_URL}?client_id=${bb.clientId}&redirect_uri=${bb.callBackUrl}&state=${authData.state}&response_type=code&${pkceParams}`;
}

//  Generates post data for call to access token URL
export function generateTokenPostData(
  bb: BlueButton,
  authData: authData,
  code: string,
  callBackState: string
): tokenPostData {
  // Check state from callback here?
  if (callBackState != authData.state) {
    throw new Error("Provided callback state does not match authData state.");
  }

  const BB2_ACCESS_TOKEN_URL = bb.baseUrl + "/" + bb.version + "/o/token/";

  return {
    client_id: bb.clientId,
    client_secret: bb.clientSecret,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: bb.callBackUrl,
    code_verifier: authData.verifier,
    code_challenge: authData.codeChallenge,
  };
}
