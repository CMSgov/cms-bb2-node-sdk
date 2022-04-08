import express, { Request, Response } from "express";
import BlueButton from ".";
import { AuthorizationToken } from "./entities/AuthorizationToken";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

const bb = new BlueButton();
const authData = bb.generateAuthData();

// AuthorizationToken holds access grant info:
// access token, expire in, expire at, token type, scope, refreh token, etc.
// it is associated with current logged in user in real app,
// check SDK js docs for more details.

let authToken: AuthorizationToken;

// start authorize flow: response with URL to redirect to Medicare.gov beneficiary login
app.get("/api", (req, res) => {
  const redirectUrl = bb.generateAuthorizeUrl(authData);
  res.redirect(redirectUrl);
});

// auth flow: response with URL to redirect to Medicare.gov beneficiary login
app.get("/api/authorize/authurl", async (req: Request, res: Response) => {
  const authUrl = bb.generateAuthorizeUrl(authData);
  res.send(authUrl);
});

// auth flow: oauth2 call back
app.get("/api/bluebutton/callback", async (req: Request, res: Response) => {
  if (typeof req.query.error === "string") {
    res.json({ message: req.query.error });
  } else {
    if (
      typeof req.query.code === "string" &&
      typeof req.query.state === "string"
    ) {
      let results;
      try {
        authToken = await bb.getAuthorizationToken(
          authData,
          req.query.code,
          req.query.state
        );
        // data flow: after access granted
        // the app logic can fetch the beneficiary's data in app specific ways:
        // e.g. download EOB periodically etc.
        // access token can expire, SDK automatically refresh access token when that happens.
        const eobResults = await bb.getExplanationOfBenefitData(authToken);
        authToken = eobResults.token; // in case authToken got refreshed during fhir call
        const patientResults = await bb.getPatientData(authToken);
        authToken = patientResults.token;
        const coverageResults = await bb.getCoverageData(authToken);
        authToken = coverageResults.token;
        const profileResults = await bb.getProfileData(authToken);
        authToken = profileResults.token;

        results = {
          eob: eobResults.response?.data,
          patient: patientResults.response?.data,
          coverage: coverageResults.response?.data,
          profile: profileResults.response?.data,
        };
      } catch (e) {
        console.log(e);
      }
      res.json(results);
    } else {
      res.json({ message: "Missing AC in callback." });
    }
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
