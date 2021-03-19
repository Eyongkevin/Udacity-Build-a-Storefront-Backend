import { OrderType } from '../interfaces/Order';
import { pool, parseError } from '../db';

export class Order {
  // define table
  table: string = 'orders';

  // Get current order by user id
  async getCurrentOrderByUserId(userId: number): Promise<OrderType[]> {
    try {
      const status = 'active';
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table} WHERE user_id = ${userId} AND status = ${status} LIMIT 1`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get current order. Error: ${parseError(err)}`);
    }
  }

  // select completed order by user id
  async getCompletedOrdersByUserId(userId: number): Promise<OrderType[]> {
    try {
      const status = 'complete';
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table} WHERE user_id = ${userId} AND status = ${status}`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not get completed orders. Error: ${parseError(err)}`
      );
    }
  }
}

// update
// delete
