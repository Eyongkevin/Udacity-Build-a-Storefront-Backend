import { Handler } from 'express';
import morgan from 'morgan';

export const loggerMiddleware: Handler = morgan('short');
