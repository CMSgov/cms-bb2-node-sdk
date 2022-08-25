# Node SDK for Blue Button 2.0 API

The Node software development kit (SDK) for [CMS Blue Button 2.0 (BB2.0) API](https://bluebutton.cms.gov/developers/) provides tools and resources for developers integrating with the Blue Button 2.0 API.

# Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Sample App](#sample-app)
- [About](#about)
- [Help and Support](#help)

## Prerequisites <a name="prerequisites"></a>

You'll need a sandbox account and sample access token to access data from the Blue Button 2.0 API.

To learn how to create a sandbox account and generate a sample access token, see **[Try the API](https://bluebutton.cms.gov/developers/#try-the-api)**.

## Installation <a name="installation"></a>

npm

```bash
$ npm install cms-bluebutton-sdk
```

npm with TypeScript

```bash
$ npm install --save-dev @types/cms-bluebutton-sdk
```

Yarn

```bash
$ yarn add cms-bluebutton-sdk
```

Yarn with Typescript

```bash
$ yarn add --dev @types/cms-bluebutton-sdk
```

## Configuration <a name="configuration"></a>

The configuration is in JSON format and stored in a local file. The default location is the current working directory with file name: `.bluebutton-config.json`

### Parameters

| Parameter      | Value Options         | Description                                                   |
| -------------- | --------------------- | ------------------------------------------------------------- |
| `clientId`     | foo                   | OAuth2.0 client ID of the app                                 |
| `clientSecret` | bar                   | OAuth2.0 client secret fot the app                            |
| `callbackUrl`  | https://www.fake.com/ | OAuth2.0 callback URL for the app                             |
| `version`      | 1 or 2                | Blue Button 2.0 API version. Default version is 2.            |
| `environment`  | SANDBOX or PRODUCTION | Web location where the app is registered. Default is SANDBOX. |

### Environments and Data

The Blue Button 2.0 API is available in V1 and V2 in a Sandbox and Production environment.

- Sandbox location: https://sandbox.bluebutton.cms.gov
- Production location: https://api.bluebutton.cms.gov

Version data formats:

- V1: FHIR STU2
- V2: FHIR R4

Sample configuration JSON with default version and environment:

```
{
  "clientId": "foo",
  "clientSecret": "bar",
  "callbackUrl": "https://www.fake.com/",
}

```

If needed, you can set your application's target environment and API version.

Example:

```
{
  "clientId": "foo",
  "clientSecret": "bar",
  "callbackUrl": "https://www.fake.com/",
  "version": "2",
  "environment": "PRODUCTION"
}

```

## Usage <a name="usage"></a>

The following code shows the SDK used with a Node JS Express server. This code walks through:

- Obtaining an access token with scope chosen by a user
- Passing the token to query for FHIR data
- Using URL links from the response to page through data
- Using the SDK paging support to return all data in one call

```

import express, { Request, Response } from 'express';
import { BlueButton } from 'cms-bluebutton-sdk';
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
        * 1. Access token scope with demagraphic info:
        *
        * scope: [
        * "patient/Coverage.read",
        * "patient/ExplanationOfBenefit.read",
        * "patient/Patient.read",
        * "profile",
        * ]
        *
        * 2. Access token scope without demagraphic info:
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

        // Alternatively app logic can call refreshAuthToken to perform a token refresh
        // preemptively before the fhir calls:
        // authToken = await bb.refreshAuthToken(authToken);

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

## Sample App

For a complete Node JS sample app, see [CMS Blue Button Node JS Sample App](https://github.com/CMSgov/bluebutton-sample-client-nodejs-react).

## About the Blue Button 2.0 API <a name="about"></a>

The [Blue Button 2.0 API](https://bluebutton.cms.gov/) provides Medicare enrollee claims data to applications using the [OAuth2.0 authorization flow](https://datatracker.ietf.org/doc/html/rfc6749). We aim to provide a developer-friendly, standards-based API that enables people with Medicare to connect their claims data to the applications, services, and research programs they trust.

## Help and Support <a name="help"></a>

Got questions? Need help troubleshooting? Want to propose a new feature? Contact the Blue Button 2.0 team and connect with the community in our [Google Group](https://groups.google.com/forum/#!forum/Developer-group-for-cms-blue-button-api).
