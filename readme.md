## Descritpion

An SDK used for interacting with the CMS Blue Button 2.0 API

## Installing

Using npm:

```bash
$ npm install cms-bluebutton-sdk
```

Using yarn:

```bash
$ yarn add cms-bluebutton-sdk
```

## Example Usages

Below example code shows SDK used with express.

```

import express, { Router, Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'sandbox') {
app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
app.use(helmet());
}

const bb = new BlueButton();
const authData = bb.generateAuthData();
let authToken: AuthorizationToken; // tied to current logged in user in real app

const router = Router();

// auth flow: response with URL to redirect to Medicare.gov beneficiary login
router.get('/authorize/authurl', bb.generateAuthorizeUrl);

// auth flow: oauth2 call back
router.get('/bluebutton/callback', async (req: Request, res: Response) => {
authToken = await bb.getAuthorizationToken(authData, req.query.code, req.query.state, req.query.error);
});

// data flow

// get EOB
router.get('/data/benefit', async (req: Request, res: Response) => {
const data = await bb.getExplanationOfBenefitData(authToken);
authToken = data.token;
res.json(data.response.data);
});

// get Patient
router.get('/data/patient', async (req: Request, res: Response) => {
const data = await bb.getPatientData(authToken);
authToken = data.token;
res.json(data.response.data);
});

// get Coverage
router.get('/data/coverage', async (req: Request, res: Response) => {
const data = await bb.getCoverageData(authToken);
authToken = data.token;
res.json(data.response.data);
});

// get Profile
router.get('/data/userprofile', async (req: Request, res: Response) => {
const data = await bb.getProfileData(authToken);
authToken = data.token;
res.json(data.response.data);
});

```

## Sample App

A Node JS React sample app can be found at:
[CMS BlueButton Node JS Sample App](https://github.com/CMSgov/bluebutton-sample-client-python-react)
