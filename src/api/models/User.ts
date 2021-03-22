import bcrypt from 'bcrypt';
import { pool, parseError } from '../db';
import { generateToken } from '../../utils';
import {
  UserReturnType,
  UserType,
  UserCreatedReturnType
} from '../interfaces/User';

export class User {
  // define table
  table: string = 'users';

  // select all users
  async getUsers(): Promise<UserReturnType[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table}`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all users. Error: ${parseError(err)}`);
    }
  }

  // select user by id
  async getUserById(userId: number): Promise<UserReturnType> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table} WHERE id = $1`;
      const result = await conn.query(sql, [userId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${parseError(err)}`);
    }
  }

  // create a user
  async createUser(user: UserType): Promise<UserCreatedReturnType> {
    try {
      const { firstname, lastname, password } = user;
      const hashPassword = bcrypt.hashSync(password, 10);
      const conn = await pool.connect();
      const sql = `INSERT INTO ${this.table} (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`;
      const result = await conn.query(sql, [firstname, lastname, hashPassword]);
      conn.release();

      const id: number = result.rows[0].id;
      const token = generateToken(id);
      return {
        auth: true,
        token
      };
    } catch (err) {
      throw new Error(`Could not create user. Error: ${parseError(err)}`);
    }
  }

  // delete user
  async deleteUser(id: number): Promise<UserReturnType> {
    try {
      const sql = `DELETE FROM ${this.table} WHERE id=$1 RETURNING *`;
      const conn = await pool.connect();
      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete user ${id}. Error: ${parseError(err)}`);
    }
  }
}
