import { Request, Response } from 'express';

export const requestNotFound404 = (req: Request, res: Response) => {
  res.sendStatus(404);
};
