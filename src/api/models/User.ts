import { pool } from './Pool';
import { Response, Request } from 'express'
import bcrypt from 'bcrypt';

// define table
const table: String = 'users';

// set error message
pool.on('error', (err, client) => `Error, ${err},  occured on ${client}`);

// select all users
const getUsers = async (req: Request, res: Response) => {
    const allUsers = await pool.query(
        `SELECT * FROM ${table};`
    );
    res.status(200).json(allUsers.rows);

};

// select user by id
const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const userById = await pool.query(
        `SELECT * FROM ${table} WHERE id = $1`, [id]
    );
    res.status(200).json(userById.rows[0]);

};

// create a user
const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const addUser = await pool.query(
        `INSERT INTO ${table} (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`,
        [firstName, lastName, hashPassword ]
    );
    res.status(200).json(addUser.rows[0]);

};

// update
// delete
// where

export {
    getUsers,
    getUserById,
    createUser
}