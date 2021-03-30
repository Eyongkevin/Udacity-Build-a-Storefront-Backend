import express, { Application } from 'express';
import cors from 'cors';

import { routes } from './api/routes';
import { loggerMiddleware } from './api/middlewares/logger';
import { requestNotFound404 } from './api/middlewares/404Request';
import { handleErrors } from './api/middlewares/handleErrors';

export const app: Application = express();

// enable cors
const corsOption = {
  optionsSuccessStatus: 200 // for some lagacy browsers
};
app.use(cors(corsOption));
// add json parser
app.use(express.json());
// console log all requests
app.use(loggerMiddleware);
// set routes
routes(app);
// handle unknown requests
app.use(requestNotFound404);
// handle errors
app.use(handleErrors);
