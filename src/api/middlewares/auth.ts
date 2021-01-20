import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const auth_token = (req: Request, res: Response, next: NextFunction) => {
  try {
      const decoded = jsonwebtoken.verify(req.body.token, process.env.JWT_SECRET as string)
      res.locals.userData = decoded;
      next();
  } catch (err) {
      return res.status(401).json({
          message: "Auth Failed"
      });
  }
}