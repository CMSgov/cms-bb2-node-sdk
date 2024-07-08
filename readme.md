# Node SDK for Blue Button 2.0 API

# test github repo settings

The Node software development kit (SDK) provides tools and resources for developers integrating with the [CMS Blue Button 2.0 (BB2.0) API](https://bluebutton.cms.gov/developers/).

# Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration Parameters](#configuration-parameters)
- [Configuration Methods](#configuration-methods)
- [Usage](#usage)
- [Sample App](#sample-app)
- [About](#about)
- [License](#license)
- [Security](#security)
- [Help and Support](#help)

## Prerequisites <a name="prerequisites"></a>

You'll need a sandbox account and sample access token to access data from the Blue Button 2.0 API.

To learn how to create a sandbox account and generate a sample access token, see [Try the API](https://bluebutton.cms.gov/developers/#try-the-api).

## Installation <a name="installation"></a>

npm

```bash
npm install cms-bluebutton-sdk
```

npm with TypeScript

```bash
npm install --save-dev @types/cms-bluebutton-sdk
```

Yarn

```bash
yarn add cms-bluebutton-sdk
```

Yarn with TypeScript

```bash
yarn add --dev @types/cms-bluebutton-sdk
```

## Configuration Parameters<a name="configuration-parameters"></a>

Required SDK configuration parameters include:

| Parameter      | Value                                | Default   | Description                       |
| -------------- | ------------------------------------ | --------- | --------------------------------- |
| `environment`  | `SANDBOX` or `PRODUCTION`            | `SANDBOX` | Blue Button 2.0 API environment   |
| `version`      | `1` or `2`                           | `2`       | Blue Button 2.0 version           |
| `clientId`     | _`your_client_id`_                   |           | OAuth2.0 client ID of the app     |
| `clientSecret` | _`your_client_secret`_               |           | OAuth2.0 client secret of the app |
| `callbackUrl`  | _`https://www.example.com/callback`_ |           | OAuth2.0 callback URL of the app  |

### Access Token Refresh on Expire - `tokenRefreshOnExpire`

SDK FHIR requests check whether the access token is expired before the data endpoint call. By default, an expired token will refresh. To disable token refresh, set `tokenRefreshOnExpire` to `false`.

**Note:** If an application’s authorization for accessing user data has expired, the corresponding access token will not be able to be refreshed; see [here](https://bluebutton.cms.gov/developers/#expired-data-access-grant) for more details.

### FHIR Requests Retry Settings - `retrySettings`

Retry is enabled by default for FHIR requests. The folllowing parameters are available for exponential back off retry algorithm.

| Retry parameter   | Value (default)              | Description                      |
| ----------------- | ---------------------------- | -------------------------------- |
| `backoffFactor`   | `5`                          | Backoff factor in seconds        |
| `total `          | `3`                          | Max retries                      |
| `statusForcelist` | [`500`, `502`, `503`, `504`] | Error response codes to retry on |

The exponential backoff factor (in seconds) is used to calculate interval between retries using the formula `backoffFactor * (2 ** (i - 1))` where `i` starts from 0.

Example: A `backoffFactor` of 5 seconds generates the wait intervals: 2.5, 5, 10, ...

To disable the retry, set `total = 0`.

## Configuration Methods<a name="configuration-methods"></a>

There are two ways to configure the SDK when instantiating a `BlueButton` class instance:

### JSON object literal

- Configuration `key:value` pairs can be used.
- Configuration values can be provided from your own application's configuration method.

Example:

```TypeScript
    const bb = BlueButton({
             "environment": "PRODUCTION",
             "clientId": "foo",
             "clientSecret": "bar",
             "callbackUrl": "https://www.fake.com/callback",
             "version": 2,
             "retrySettings": {
                 "total": 3,
                 "backoffFactor": 5,
                 "statusForcelist": [500, 502, 503, 504]
             }
          }
```

### JSON config file

The configuration is in JSON format and stored in a local file. The default location is the current working directory with file name: `.bluebutton-config.json`

By default, `tokenRefreshOnExpire` is true.

Example code:

```Typescript
    const bb = BlueButton("settings/my_bb2_sdk_conf.json");
```

Example JSON in file:

```JSON
    {
      "environment": "SANDBOX",
      "clientId": "foo",
      "clientSecret": "bar",
      "callbackUrl": "https://www.fake.com/callback",
      "version": 2,
      "retrySettings": {
        "total": 3,
        "backoffFactor": 5,
        "statusForcelist": [500, 502, 503, 504]
      }
    }
```

### Environments and Data

The Blue Button 2.0 API is available in V1 and V2 in a sandbox and production environment.

- Sandbox location: https://sandbox.bluebutton.cms.gov
- Production location: https://api.bluebutton.cms.gov

Version data formats:

- V1: FHIR STU3
- V2: FHIR R4

Sample configuration JSON with default version and environment:

```JSON
{
  "clientId": "your_client_id",
  "clientSecret": "your_client_secret",
  "callbackUrl": "https://www.example.com/"
}
```

If needed, you can set your application's target environment and API version.

Example:

```JSON
{
  "clientId": "your_client_id",
  "clientSecret": "your_client_secret",
  "callbackUrl": "https://www.example.com/",
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

```TypeScript
import express, { Request, Response } from 'express';
import { BlueButton } from 'cms-bluebutton-sdk';
import { AuthorizationToken } from 'cms-bluebutton-sdk';

const app = express();

const bb = new BlueButton();
const authData = bb.generateAuthData();

// AuthorizationToken holds access grant info:
// access token, expire in, expire at, token type, scope, refreh token, etc.
// The token is associated with current logged in user. For more details,
// see SDK JS docs.

let authToken: AuthorizationToken;

// Start authorize flow: response with URL to redirect to Medicare.gov beneficiary login
app.get('/', (req, res) => {
    const redirectUrl = bb.generateAuthorizeUrl(authData);
    res.redirect(redirectUrl);
})

// OAuth2.0 call back:Obtain access token, optionally check scope, and fetch data
app.get('api/bluebutton/callback', async (req: Request, res: Response) => {

  let results = {};
    try {
        authToken = await bb.getAuthorizationToken(authData, req.query.code, req.query.state, req.query.error);
        // Access token obtained. During authorization, the beneficiary can grant
        // access to his/her demographic data and claims data or only claims data.
        // Check the scope of the current access token:
        const scopes: string[] = authToken.scope;
        // iterate scope entries here or check if a permission is in the scope
        if (authToken.scope.index("patient/Patient.read") > -1) {
            // patient info access granted
        }

         /**
        * 1. Access token scope with demographic info:
        *
        * scope: [
        * "patient/Coverage.read",
        * "patient/ExplanationOfBenefit.read",
        * "patient/Patient.read",
        * "profile",
        * ]
        *
        * 2. Access token scope without demographic info:
        *
        * scope: [
        * "patient/Coverage.read",
        * "patient/ExplanationOfBenefit.read",
        * ]
        */

        // Data flow: After access granted,
        // your app logic can fetch the beneficiary's data in specific ways.
        // Example: download EOB periodically

        // The access token kept in var authToken can expire.
        // SDK FHIR call will detect expiration and refresh the token
        // Example FHIR call:  getExplanationOfBenefitData

        // You can also configure your app to call refreshAuthToken
        // for an access token refresh before the FHIR calls:
        // Example:  authToken = await bb.refreshAuthToken(authToken);

        eobResults = await bb.getExplanationOfBenefitData(authToken);
        // Note, below assignment is needed to pass on the auth token in case it got updated during the fhir call
        authToken = eobResults.token;

        patientResults = await bb.getPatientData(authToken);
        authToken = patientResults.token;

        coverageResults = await bb.getCoverageData(authToken);
        authToken = coverageResults.token;

        profileResults = await bb.getProfileData(authToken);
        authToken = profileResults.token;

        // Note that above FHIR data calls
        // (getExplanationOfBenefitData, getPatientData, and getCoverageData)
        // send FHIR search requests to Blue Button 2.0 API
        // and the data returned is a FHIR resource bundle of the
        // first 10 resources. Example: If the current beneficiary
        // has 55 ExplanationOfBenefit resources,
        // the call to getExplanationOfBenefitData will return the
        // first 10 of them.
        // To retrive all the ExplanationOfBenefit resources,
        // call getPages:

        const eobbundle = eobResults.response?.data;
        // getPages will navigate from the bundle (eobbundle) and return a list of all
        // the 'pages'
        const eobs = await bb.getPages(eobbundle, authToken);
        // this is needed to pass on the auth token in case it got updated during the call
        authToken = eobs.token;

        // The app can choose more fine grained control of pagination:
        // Example: fetch 1st page, fetch last page, fetch next page,
        // fetch previous page:
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

        // Get all patient(s) by calling getPages. (Note: This is trivial since
        // there is only 1 patient resource)
        const ptbundle = patientResults.response?.data;
        const pts = await bb.getPages(ptbundle, authToken);
        authToken = pts.token;

        // Get all coverages by calling getPages
        const coveragebundle = coverageResults.response?.data;
        const coverages = await bb.getPages(coveragebundle, authToken);
        authToken = coverages.token;

        // You can apply getPages on non-bundle resources or bundles
        // without navigation links. In that case, no page navigation
        // occurs and a list of the original resource is returned,
        // Example: The below code calls getPages on a profile result
        // which might not be a bundle resource.
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

## License<a name="license"></a>

The CMS Blue Button 2.0 Node SDK is licensed under the Creative Commons Zero v1.0 Universal. For more details, see [License](https://github.com/CMSgov/cms-bb2-node-sdk/blob/main/LICENSE).

## Security<a name="Security"></a>

We do our best to keep our SDKs up to date with vulnerability patching and security testing, but you are responsible for your own review and testing before implementation.

To report vulnerabilities, please see the [CMS Vulnerability Disclosure Policy](https://www.cms.gov/vulnerability-disclosure-policy) and follow the directions for reporting.

## Help and Support <a name="help"></a>

Got questions? Need help troubleshooting? Want to propose a new feature? Contact the Blue Button 2.0 team and connect with the community in our [Google Group](https://groups.google.com/forum/#!forum/Developer-group-for-cms-blue-button-api).
