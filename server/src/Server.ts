import { Router } from 'express';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BlueButton from './BB2';
import { IAppContext } from './BB2';
import { User, IUser } from './utils/db';
import { CodeChallenge } from './utils/generatePKCE';

const app = express();
const { BAD_REQUEST } = StatusCodes;

export interface DB {
    patients: any,
    users: IUser[],
    codeChallenges: {
      [key: string]: CodeChallenge
    },
    codeChallenge: CodeChallenge,
    settings: any
  }
  
const db: DB = {
  patients: {},
  users: [new User({
    name: 'John Doe',
    userName: 'jdoe29999',
    pcp: 'Dr. Hibbert',
    primaryFacility: 'Springfield General Hospital',
    })],
  codeChallenges: {},
  codeChallenge: {
    codeChallenge: '',
    verifier: '',
  },
  settings: [],
};
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

class AppCtx implements IAppContext {
    db: DB;
    sdk: BlueButton;

    constructor(db: DB, sdk: BlueButton) {
        this.db = db;
        this.sdk = sdk;
    }

    getUser() {
        return this.db.users[0];
    }

    getBlueButton() {
        return this.sdk;
    }

    getCodeChallenge(): CodeChallenge {
        return this.db.codeChallenge;
    }

    getCodeChallenges(): {[key: string]: CodeChallenge} {
        return this.db.codeChallenges;
    }

    doneAuthorize(res: Response) {
        console.log("AUthorize done!")
        // redirect to FE
        res.redirect("http://localhost:3000");
    }

    donePatient(res: Response, data: any) {
      console.log("Patient query done!");
      this.getUser().getData().set("patient", data);
    }
  
    doneCoverage(res: Response, data: any) {
      console.log("Coverage query done!");
      this.getUser().getData().set("coverage", data);
    }
    
    doneEOB(res: Response, data: any) {
      console.log("EOB query done, redirect FE!");
      this.getUser().getData().set("eobData", data);
    }
}

// dispatch to SDK
const bb2Router = Router();
const bb2SDK = new BlueButton();
const appContext = new AppCtx(db, bb2SDK);

bb2Router.get('/bluebutton/callback', async (req: Request, res: Response) => {
    return await bb2SDK.callback(req, res, appContext);
});
bb2Router.get('/authorize/authurl', async (req: Request, res: Response) => {
    return await bb2SDK.authroize(req, res, appContext);
});
bb2Router.get('/data/benefit', async (req: Request, res: Response) => {
    return await bb2SDK.getExplanationOfBenefit(req, res, appContext);
});
bb2Router.get('/data/coverage', async (req: Request, res: Response) => {
    return await bb2SDK.getCoverage(req, res, appContext);
});
bb2Router.get('/data/patient', async (req: Request, res: Response) => {
    return await bb2SDK.getPatient(req, res, appContext);
});

app.use('/api', bb2Router);

app.use((err: Error, _req: Request, res: Response) => {
  console.log(err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

export default app;
