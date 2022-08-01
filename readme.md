# Blue Button API SDK

# Table of contents

1. [Descritpion](#description)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usages: Obtain Access Grant, Probe Scope, and Access Data](#usages)
5. [A Complete Sample App](#samples)
6. [API Versions and Environments](#versions_and_environments)

## Description <a name="description"></a>

This is an SDK for interacting with [CMS Blue Button 2.0 API](https://bluebutton.cms.gov/developers/),
the API allows applications to obtain a beneficiary's (who has login account with medicare.gov) grant
to access his/her medicare claims data - through OAUTH2 [(RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749) authorization flow.

By using the SDK, the development of applications accessing Blue Button 2.0 API can be greatly simplified.

Note, following the OAUTH2 best practices, OAUTH2 PKCE etension [(RFC 7636)](https://datatracker.ietf.org/doc/html/rfc7636) is always enabled.

## Installation <a name="installation"></a>

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

## Configuration <a name="configuration"></a>

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

## Sample Usages: Obtain Access Grant, Probe Scope, and Access Data <a name="usages"></a>

Below are psuedo code snippets showing SDK used with node express server.

```

import express, { Request, Response } from 'express';
import BlueButton from 'cms-bluebutton-sdk';
import { AuthorizationToken } from 'cms-bluebutton-sdk';

const app = express();

const bb = new BlueButton();
const authData = bb.generateAuthData();

// AuthorizationToken holds access grant info:
// access token, expire in, expire at, token type, scope, refreh token, etc.
// it is associated with current logged in user in real app,
// check SDK js docs for more details.

let authToken: AuthorizationToken;

// start authorize flow: response with URL to redirect to Medicare.gov beneficiary login
app.get('/', (req, res) => {
    const redirectUrl = bb.generateAuthorizeUrl(authData);
    res.redirect(redirectUrl);
})

// oauth2 call back: obtain access token, optionally check scope, and fetch data
app.get('api/bluebutton/callback', async (req: Request, res: Response) => {

  let results = {};
    try {
        authToken = await bb.getAuthorizationToken(authData, req.query.code, req.query.state, req.query.error);
        // now access token obtained, note, during authorization, the beneficiary can grant
        // access to his/her demographic data and claims data or only claims data, check the scope
        // of the current access token as shown below:
        const scopes: string[] = authToken.scope;
        // iterate scope entries here or check if a permission is in the scope
        if (authToken.scope.index("patient/Patient.read") > -1) {
            // patient info access granted
        }

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

        // data flow: after access granted
        // the app logic can fetch the beneficiary's data in app specific ways:
        // e.g. download EOB periodically etc.

        // Access token kept in var authToken can expire, SDK fhir call (e.g. getExplanationOfBenefitData)
        // will detect that and perform token refresh accordingly.

        // Alternatively app logic can call refreshAccessToken to perform a token refresh
        // preemptively before the fhir calls:
        // authToken = await bb.refreshAccessToken(authToken);

        eobResults = await bb.getExplanationOfBenefitData(authToken);
        // Note, below assignment is needed to pass on the auth token in case it got updated during the fhir call
        authToken = eobResults.token;

        patientResults = await bb.getPatientData(authToken);
        authToken = patientResults.token;

        coverageResults = await bb.getCoverageData(authToken);
        authToken = coverageResults.token;

        profileResults = await bb.getProfileData(authToken);
        authToken = profileResults.token;

        // Note that above FHIR data calls (getExplanationOfBenefitData/getPatientData/getCoverageData)
        // are sending FHIR search requests to Blue Button 2.0 API, and the data returned is a FHIR resource
        // bundles of the first 10 resources, e.g. if the current beneficiary has 55 ExplanationOfBenefit resources,
        // the call to getExplanationOfBenefitData will return the first 10 of them,
        // to retrive all the ExplanationOfBenefit resources, call getPages as shown below:

        const eobbundle = eobResults.response?.data;
        // getPages will navigate from the bundle (eobbundle) and return a list of all
        // the 'pages'
        const eobs = await bb.getPages(eobbundle, authToken);
        // this is needed to pass on the auth token in case it got updated during the call
        authToken = eobs.token;

        // alternatively, the app can choose more fine grained control of pagination:
        // e.g. fetch 1st page, fetch last page, fetch next page, fetch previous page,
        // as shown by below lines of code:
        const firstPgURL = bb.extractPageNavUrl(eobbundle, "first");
        if (firstPgURL) {
            const fistPage = await this.getCustomData(firstPgURL, authToken);
            // pass on token
            authToken = firstPage.token;
            // harvest bundle json
            const firstBundle = firstPage.response?.data;
        }
        const lastPgURL = bb.extractPageNavUrl(eobbundle, "last");
        if (lastPgURL) {
            const lastPage = await this.getCustomData(lastPgURL, authToken);
            // pass on token
            authToken = lastPage.token;
            // harvest bundle json
            const lastBundle = lastPage.response?.data;
        }
        const nextPgURL = bb.extractPageNavUrl(eobbundle, "next");
        if (nextPgURL) {
            const nextPage = await this.getCustomData(nextPgURL, authToken);
            // pass on token
            authToken = nextPage.token;
            // harvest bundle json
            const nextBundle = nextPage.response?.data;
        }
        const prevPgURL = bb.extractPageNavUrl(eobbundle, "previous");
        if (prevPgURL) {
            const prevPage = await this.getCustomData(prevPgURL, authToken);
            // pass on token
            authToken = prevPage.token;
            // harvest bundle json
            const prevBundle = prevPage.response?.data;
        }

        // get all patient(s) by calling getPages - note this is trivial since there is only
        // 1 patient resource
        const ptbundle = patientResults.response?.data;
        const pts = await bb.getPages(ptbundle, authToken);
        authToken = pts.token;

        // get all coverages by calling getPages
        const coveragebundle = coverageResults.response?.data;
        const coverages = await bb.getPages(coveragebundle, authToken);
        authToken = coverages.token;

        // Note, getPages can be applied on non bundle resources or bundles without navigation links,
        // in that case, no page navigation occurs and a list of the original resource will be returned,
        // e.g. below code calls getPages on a profile result which might not be a bundle resource.
        const pfbundle = profileResults.response?.data;
        const pfs = await bb.getPages(pfbundle, authToken);
        authToken = pfs.token;

        // getPages return an object of structure:
        // {token: <authToken>, pages: [<bundle of 10 resources>, <bundle of 10 resources>, ...]}
        results = {
          eob: eobs.pages,
          patient: pts.pages,
          coverage: coverages.pages,
          profile: pfs.pages,
        };

    } catch (e) {
        console.log(e);
    }

    res.json(results)

});

```

## A Complete Sample App <a name="samples"></a>

A Node JS React sample app can be found at:
[CMS Blue Button Node JS Sample App](https://github.com/CMSgov/bluebutton-sample-client-nodejs-react)

## API Versions and Environments <a name="versions_and_environments"></a>

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
