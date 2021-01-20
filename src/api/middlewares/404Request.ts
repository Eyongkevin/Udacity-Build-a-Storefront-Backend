import { NextFunction, Request, Response } from 'express';

export const requestNotFound404 = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line no-undef
  const error: NodeJS.ErrnoException = new Error('Not Found');
  error.code = '404';
  next(error);
};
