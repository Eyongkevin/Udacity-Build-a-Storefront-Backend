import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { routes } from './api/routes';
import { loggerMiddleware } from './api/middlewares/logger';
import { requestNotFound404 } from './api/middlewares/404Request';
import { handleErrors } from './api/middlewares/handleErrors';

export const app: Application = express();

// enable cors
app.use(cors())
// add json parser
app.use(bodyParser.json())
// console log all requests
app.use(loggerMiddleware)
// set routes
routes(app);
// handle unknown requests
app.use(requestNotFound404)
// handle errors
app.use(handleErrors)