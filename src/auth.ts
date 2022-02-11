/*
auth.ts - Provides auth related methods for the Bluebutton class
*/

import BlueButton from "./index";
import {
  generateCodeChallenge,
  generateRandomState,
} from "./utils/generatePKCE";

export function setCallBackUrl(this: BlueButton, callBackUrl: string): any {
  this.callBackUrl = callBackUrl;
}

export function setUsePKCE(this: BlueButton, usePKCE: boolean): any {
  this.usePKCE = usePKCE;
}

export function generateAuthorizeUrl(this: BlueButton): any {
  const BB2_AUTH_URL = this.baseUrl + "/" + this.version + "/o/authorize";

  let pkceParams = "";
  this.state = generateRandomState();

  if (this.usePKCE) {
    this.codeChallenge = generateCodeChallenge();
    pkceParams =
      "&code_challenge_method=S256" +
      "&code_challenge=" +
      this.codeChallenge.codeChallenge;
  }

  this.authorizeUrl =
    BB2_AUTH_URL +
    "?client_id=" +
    this.clientId +
    "&redirect_uri=" +
    this.callBackUrl +
    "&state=" +
    this.state +
    "&response_type=code" +
    pkceParams;

  return this;
}
