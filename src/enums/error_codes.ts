export enum Errors {
  CALLBACK_ACCESS_DENIED = "Callback request beneficiary denied access to their data",
  CALLBACK_ACCESS_CODE_MISSING = "Callback request is missing the CODE query parameter",
  CALLBACK_STATE_MISSING = "Callback request is missing the STATE query parameter",
}
