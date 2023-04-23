import { version } from "../../package.json";

export enum Environments {
  PRODUCTION = "PRODUCTION",
  SANDBOX = "SANDBOX",
}

export const SDK_HEADERS = {
  "X-BLUEBUTTON-SDK": "node",
  "X-BLUEBUTTON-SDK-VERSION": version,
};
