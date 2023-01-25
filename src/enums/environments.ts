export enum Environments {
  PRODUCTION = "PRODUCTION",
  SANDBOX = "SANDBOX",
  TEST = "TEST",
  LOCAL = "LOCAL",
}

export const SDK_VERSION = "1.0.0";

export const SDK_HEADERS = {
  "X-BLUEBUTTON-SDK": "node",
  "X-BLUEBUTTON-SDK-VERSION": SDK_VERSION,
};
