/* Types for Auth related methods */

export type authData = {
  codeChallenge: string;
  verifier: string;
  state: string;
};

export type tokenPostData = {
  client_id: string;
  client_secret: string;
  code: string;
  grant_type: string;
  redirect_uri: bb.callBackUrl;
  code_verifier: string;
  code_challenge: string;
};
