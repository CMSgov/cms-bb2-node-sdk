export enum Errors {
  CALLBACK_ACCESS_DENIED = "Callback request beneficiary denied access to their data",
  CALLBACK_ACCESS_CODE_MISSING = "Callback request is missing the CODE query parameter",
  CALLBACK_STATE_MISSING = "Callback request is missing the STATE query parameter",
  CALLBACK_STATE_DOES_NOT_MATCH = "Provided callback state does not match AuthData state",
  AUTH_TOKEN_URL_STATUS_400 = "Token endpoint BAD REQUEST",
  AUTH_TOKEN_URL_STATUS_403 = "Token endpoint FORBIDDEN",
  AUTH_TOKEN_URL_STATUS_404 = "Token endpoint NOT FOUND",
  AUTH_TOKEN_URL_STATUS_500 = "Token endpoint SERVER ERROR",
  AUTH_TOKEN_URL_STATUS_502 = "Token endpoint BAD GATEWAY",
  AUTH_TOKEN_URL_STATUS_NOT_EXPECTED = "Token endpoint not expected - get status code via getAuthResponseStatusCode() method",
  AUTH_TOKEN_URL_RESPONSE_DATA_MISSING = "Token endpoint response data is missing",
}
