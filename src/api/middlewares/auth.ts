import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const decoded: string | object = jsonwebtoken.verify(
      req.body.token,
      process.env.JWT_SECRET as string
    );
    res.locals.userData = decoded;
    next();
  } catch (err) {
    err.code = 401;
    next(err);
  }
};
