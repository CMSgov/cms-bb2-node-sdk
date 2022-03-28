## Description

This is an SDK for interacting with [CMS Blue Button 2.0 API](https://bluebutton.cms.gov/developers/),
the API allows applications to obtain a beneficiary's (who has login account with medicare.gov) grant
to access his/her medicare claims data - through OAUTH2 [(RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749) authorization flow.

By using the SDK, the development of applications accessing Blue Button 2.0 API can be greatly simplified.

Note, following the OAUTH2 best practices, OAUTH2 PKCE etension [(RFC 7636)](https://datatracker.ietf.org/doc/html/rfc7636) is always enabled.

## Installation

Using npm:

```bash
$ npm install cms-bluebutton-sdk
```

When develop with typescript

```bash
$ npm install --save-dev @types/cms-bluebutton-sdk
```

Using yarn:

```bash
$ yarn add cms-bluebutton-sdk
```

When develop with typescript

```bash
$ yarn add --dev @types/cms-bluebutton-sdk
```

## Configuration

the SDK needs to be properly configured to work, the parameters are:

- the app's credentials - client id, client secret
- the app's callback url
- the version number of the API
- the app's environment (web location where the app is registered)

the configuration is in json format and stored in a local file, the default location
is current working directory with file name: .bluebutton-config.json

A sample configuration json:

```
{
  "clientId": "foo",
  "clientSecret": "bar",
  "callbackUrl": "https://www.fake.com/",
}

```

| parameter    | value                   | Comments                        |
| ------------ | ----------------------- | ------------------------------- |
| clientId     | "foo"                   | oauth2 client id of the app     |
| clientSecret | "bar"                   | oauth2 client secret of the app |
| callbackUrl  | "https://www.fake.com/" | oauth2 callback url of the app  |

For application registration and client id and client secret, please refer to:
[Blue Button 2.0 API Docs - Try the API](https://bluebutton.cms.gov/developers/#try-the-api)

## Sample Usages: Obtain Access Grant, Probe Scope, and Access Data

Below are psuedo code snippets showing SDK used with node express server.

```

import express, { Router, Request, Response } from 'express';

const app = express();

const bb = new BlueButton();
const authData = bb.generateAuthData();

// each associated with current logged in user in real app
let authToken: AuthorizationToken;

const router = Router();

// start authorize flow: response with URL to redirect to Medicare.gov beneficiary login
router.get('/authorize/authurl', bb.generateAuthorizeUrl);

// oauth2 call back: obtain access token, optionally check scope, and fetch data
router.get('/bluebutton/callback', async (req: Request, res: Response) => {
  authToken = await bb.getAuthorizationToken(authData, req.query.code, req.query.state, req.query.error);
  // now access token obtained, note, during authorization, the beneficiary can grant
  // access to his/her demographic data and claims data or only claims data, check the scope
  // of the current access token as shown below:

  const scopes: string[] = authToken.scope;
  // iterate scope entries here

  /**
   * 1. access token scope where demagraphic info included:
   *
   * scope: [
   * "patient/Coverage.read",
   * "patient/ExplanationOfBenefit.read",
   * "patient/Patient.read",
   * "profile",
   * ]
   *
   * 2. access token scope where demagraphic info not included:
   *
   * scope: [
   * "patient/Coverage.read",
   * "patient/ExplanationOfBenefit.read",
   * ]
   */
});

// data flow

// route get EOB requests
router.get('/data/benefit', async (req: Request, res: Response) => {
  const data = await bb.getExplanationOfBenefitData(authToken);
  authToken = data.token;
  res.json(data.response.data);
});

// route get Patient requests
router.get('/data/patient', async (req: Request, res: Response) => {
  const data = await bb.getPatientData(authToken);
  authToken = data.token;
  res.json(data.response.data);
});

// route get Coverage requests
router.get('/data/coverage', async (req: Request, res: Response) => {
  const data = await bb.getCoverageData(authToken);
  authToken = data.token;
  res.json(data.response.data);
});

// route get Profile requests
router.get('/data/userprofile', async (req: Request, res: Response) => {
  const data = await bb.getProfileData(authToken);
  authToken = data.token;
  res.json(data.response.data);
});

```

## A Complete Sample App

A Node JS React sample app can be found at:
[CMS Blue Button Node JS Sample App](https://github.com/CMSgov/bluebutton-sample-client-nodejs-react)

## API Versions and Environments

From two environments: PRODUCTION and SANDBOX, Blue Button API is available in v1 and v2, data served from v1 is in FHIR STU2 format, and data from v2 is in FHIR R4 format, an application's target environment and API version can be set in the SDK configuration as shown by example below:

```
{
  "clientId": "foo",
  "clientSecret": "bar",
  "callbackUrl": "https://www.fake.com/",
  "version": "2",
  "environment": "PRODUCTION"
}

```

The default API version is v2, and default environment is SANDBOX.

Web location of the environments:

[PRODUCTION Environment: https://api.bluebutton.cms.gov](https://api.bluebutton.cms.gov)

[SANDBOX Environment: https://sandbox.bluebutton.cms.gov](https://sandbox.bluebutton.cms.gov)
