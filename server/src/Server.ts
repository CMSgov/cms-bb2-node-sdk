import { Router } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

import express, { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BlueButton from './BB2';
import logger from '@shared/Logger';

const app = express();
const { BAD_REQUEST } = StatusCodes;

/** **********************************************************************************
 *                              Set basic express settings
 ********************************************************************************** */

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

// dispatch to SDK
const bb2Router = Router();
const bb2SDK = new BlueButton();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
bb2Router.get('/bluebutton/callback', async (req: Request, res: Response) => {
    await bb2SDK.callback(req, res, bb2SDK, 'http://localhost:3000');
});
bb2Router.get('/authorize/authurl', async (req: Request, res: Response) => {
    await bb2SDK.authroize(req, res, bb2SDK);
});
bb2Router.get('/data/benefit', async (req: Request, res: Response) => {
    await bb2SDK.getExplanationOfBenefit(req, res, bb2SDK);
});
bb2Router.get('/data/coverage', async (req: Request, res: Response) => {
    await bb2SDK.getCoverage(req, res, bb2SDK);
});
bb2Router.get('/data/patient', async (req: Request, res: Response) => {
    await bb2SDK.getPatient(req, res, bb2SDK);
});

app.use('/api', bb2Router);

// Print API errors
app.use((err: Error, _req: Request, res: Response) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export express instance
export default app;
