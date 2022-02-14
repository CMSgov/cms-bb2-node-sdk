import { Router } from 'express';
import AuthorizeRouter from './Authorize';
import BlueButtonSDKRouter from '../BB2';
import SettingsRouter from './Settings';
import DataRouter from './Data';

const baseRouter = Router();

// baseRouter.use('/', AuthorizeRouter);
baseRouter.use('/settings', SettingsRouter);
// baseRouter.use('/data', DataRouter);
baseRouter.use('/', BlueButtonSDKRouter);

export default baseRouter;
