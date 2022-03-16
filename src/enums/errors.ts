export enum Errors {
  CALLBACK_ACCESS_DENIED = "Callback request beneficiary denied access to their data",
  CALLBACK_ACCESS_CODE_MISSING = "Callback request is missing the CODE query parameter",
  CALLBACK_STATE_MISSING = "Callback request is missing the STATE query parameter",
  CALLBACK_STATE_DOES_NOT_MATCH = "Provided callback state does not match AuthData state",
  AUTH_TOKEN_URL_RESPONSE_DATA_MISSING = "Token endpoint response data is missing",
  GET_FHIR_RESOURCE_INALID_AUTH_TOKEN = "Invalid authorization token.",
}
