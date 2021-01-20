import { NextFunction, Request, Response } from 'express';
import http from 'http';

export const handleErrors = (error: NodeJS.ErrnoException, req: Request, res: Response, next: NextFunction) => {
  const isValidCode = error.code as string in http.STATUS_CODES
  res.status(isValidCode ? parseInt(error.code as string): 500);
  res.json({
      error: {
          message: error.message,
          PostgresErrorCode: !isValidCode ? error.code : null
      }
  })
};
