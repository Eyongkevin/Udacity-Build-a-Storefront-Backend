import { Response, Request, NextFunction } from 'express';
import { pool, parseError } from '../db';

// define table
const table: string = 'orders';

// set error message
// pool.on('error', (err, client) => `Error, ${err},  occured on ${client}`);

// select current order by user id
const getCurrentOrderByUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId: number = parseInt(req.params.user_id);
  const status = 'active';
  pool.query(
    `SELECT * FROM ${table} WHERE user_id = $1 AND status = $2 LIMIT 1`,
    [userId, status],
    (error, results) => {
      if (error) {
        parseError(error);
        next(error);
      } else {
        res.status(200).json(results.rows[0]);
      }
    }
  );
};

// select completed order by user id
const getCompletedOrdersByUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId: number = parseInt(req.params.user_id);
  const status = 'complete';
  pool.query(
    `SELECT * FROM ${table} WHERE user_id = $1 AND status = $2`,
    [userId, status],
    (error, results) => {
      if (error) {
        parseError(error);
        next(error);
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

// update
// delete
// where

export { getCurrentOrderByUserId, getCompletedOrdersByUserId };
