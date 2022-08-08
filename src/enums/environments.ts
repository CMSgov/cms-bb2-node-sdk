export enum Environments {
  PRODUCTION = "PRODUCTION",
  SANDBOX = "SANDBOX",
}

export const SDK_VERSION = "0.1.0";

export const SDK_HEADERS = {
  "X-BLUEBUTTON-SDK": "node",
  "X-BLUEBUTTON-SDK-VERSION": SDK_VERSION,
};
