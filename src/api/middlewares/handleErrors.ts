import { NextFunction, Request, Response } from 'express';
import http from 'http';

export const handleErrors = (
  // eslint-disable-next-line no-undef
  error: NodeJS.ErrnoException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isValidHttpCode: boolean = (error.code as string) in http.STATUS_CODES;
  res.status(isValidHttpCode ? parseInt(error.code as string) : 500);
  res.json({
    error: {
      message: error.message,
      PostgresErrorCode: !isValidHttpCode ? error.code : null
    }
  });
};
