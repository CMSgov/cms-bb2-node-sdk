/*
auth.ts - Provides auth related methods for the Bluebutton class
*/
import crypto from "crypto";

import BlueButton from ".";

export type authData = {
  codeChallenge: string;
  verifier: string;
  state: string;
};

type pkceData = {
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
  this: BlueButton,
  authData: authData
): any {
  const BB2_AUTH_URL = this.baseUrl + "/" + this.version + "/o/authorize";

  const pkceParams = `code_challenge_method=S256&code_challenge=${authData.codeChallenge}`;

  return `${BB2_AUTH_URL}?client_id=${this.clientId}&redirect_uri=${this.callBackUrl}&state=${authData.state}&response_type=code&${pkceParams}`;
}
