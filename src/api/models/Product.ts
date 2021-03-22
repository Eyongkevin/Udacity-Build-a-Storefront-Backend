import { PoolClient, QueryResult } from 'pg';
import { pool, parseError } from '../db';
import { ProductType, ProductReturnType } from '../interfaces/Product';

export class Product {
  // define table
  table: string = 'products';

  // select all products
  async getProducts(): Promise<ProductReturnType[]> {
    try {
      const conn: PoolClient = await pool.connect();
      const sql: string = `SELECT * FROM ${this.table}`;
      const result: QueryResult = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all products. Error: ${parseError(err)}`);
    }
  }

  // select product by id
  async getProductById(productId: number): Promise<ProductReturnType> {
    try {
      const conn: PoolClient = await pool.connect();
      const sql: string = `SELECT * FROM ${this.table} WHERE id=$1`;
      const result: QueryResult = await conn.query(sql, [productId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get product by id. Error: ${parseError(err)}`);
    }
  }

  // select product by category
  async getProductByCat(category: string): Promise<ProductReturnType[]> {
    try {
      const conn: PoolClient = await pool.connect();
      const sql: string = `SELECT * FROM ${this.table} WHERE category=$1`;
      const result: QueryResult = await conn.query(sql, [category]);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not get product by category. Error: ${parseError(err)}`
      );
    }
  }

  // create product
  async createProduct(product: ProductType): Promise<ProductReturnType> {
    try {
      const { name, price, category } = product;
      const sql: string = `INSERT INTO ${this.table} (name, price, category) VALUES($1, $2, $3) RETURNING *`;
      const conn: PoolClient = await pool.connect();
      const result: QueryResult = await conn.query(sql, [
        name,
        price,
        category
      ]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create product. Error: ${parseError(err)}`);
    }
  }

  // delete product
  async deleteProduct(id: number): Promise<ProductReturnType> {
    try {
      const sql: string = `DELETE FROM ${this.table} WHERE id=$1 RETURNING *`;
      const conn: PoolClient = await pool.connect();
      const result: QueryResult = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could not delete product ${id}. Error: ${parseError(err)}`
      );
    }
  }
}
