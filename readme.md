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

Using yarn:

```bash
$ yarn add cms-bluebutton-sdk
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
  "version": "1",
  "environment": "PRODUCTION"
}

```

| parameter    | value                   | Comments                                                                                                     |
| ------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| clientId     | "foo"                   | oauth2 client id of the app                                                                                  |
| clientSecret | "bar"                   | oauth2 client secret of the app                                                                              |
| callbackUrl  | "https://www.fake.com/" | oauth2 callback url of the app                                                                               |
| version      | 1 or 2                  | version number of BlueButton API (v1/v2)                                                                     |
| environment  | PRODUCTION/SANDBOX      | the target URL:<br>PRODUCTION: https://api.bluebutton.cms.gov<br>SANDBOX: https://sandbox.bluebutton.cms.gov |

## Usages

### Sample Code

Below are psuedo code snippets show SDK used with node express server.

#### Main Usage: Obtain Access Grant and Access Data

```

import express, { Router, Request, Response } from 'express';

const app = express();

const bb = new BlueButton();
const authData = bb.generateAuthData();

// each associated with current logged in user in real app
let authToken: AuthorizationToken;

const router = Router();

// auth flow: response with URL to redirect to Medicare.gov beneficiary login
router.get('/authorize/authurl', bb.generateAuthorizeUrl);

// auth flow: route oauth2 call back
router.get('/bluebutton/callback', async (req: Request, res: Response) => {
  authToken = await bb.getAuthorizationToken(authData, req.query.code, req.query.state, req.query.error);
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

#### Other Usage: Check Scope of Accesss Grant

During authorization, the beneficiary can grant access to his/her demographic data and claims data or only claims data,
below code snippet shows how to check the scope of the current access token:

```
import express, { Router, Request, Response } from 'express';

const app = express();

const bb = new BlueButton();
const authData = bb.generateAuthData();

// each associated with current logged in user in real app
let authToken: AuthorizationToken;

const router = Router();

// auth flow: response with URL to redirect to Medicare.gov beneficiary login
router.get('/authorize/authurl', bb.generateAuthorizeUrl);

// auth flow: route oauth2 call back
router.get('/bluebutton/callback', async (req: Request, res: Response) => {
  authToken = await bb.getAuthorizationToken(authData, req.query.code, req.query.state, req.query.error);
});

const scopes: string[] = authToken.scope;
// iterate the scopes here
... ...

1. Example of scope associated with an access token where demagraphic info allowed:

scope: [
    "patient/Coverage.read",
    "patient/ExplanationOfBenefit.read",
    "patient/Patient.read",
    "profile",
]

2. Example of scope associated with an access token where demagraphic info not allowed:

scope: [
    "patient/Coverage.read",
    "patient/ExplanationOfBenefit.read",
]

```

## A Complete Sample App

A Node JS React sample app can be found at:
[CMS Blue Button Node JS Sample App](https://github.com/CMSgov/bluebutton-sample-client-python-react)
