import { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { pool, parseError } from '../db';

// define table
const table: string = 'users';

// set error message
// pool.on('error', (err, client) => `Error, ${err},  occured on ${client}`);

// select all users
const getUsers = (req: Request, res: Response, next: NextFunction) => {
  pool.query(`SELECT * FROM ${table};`, (error, results) => {
    if (error) {
      parseError(error);
      next(error);
    } else {
      res.status(200).json(results.rows);
    }
  });
};

// select user by id
const getUserById = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id], (error, results) => {
    if (error) {
      parseError(error);
      next(error);
    } else {
      res.status(200).json(results.rows[0]);
    }
  });
};

// create a user
const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  pool.query(
    `INSERT INTO ${table} (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`,
    [firstName, lastName, hashPassword],
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

// update
// delete
// where

export { getUsers, getUserById, createUser };
