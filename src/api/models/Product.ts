import { pool, parseError } from '../db';
import { ProductType } from '../interfaces/Product';

export class Product {
  // define table
  table: string = 'products';

  // select all products
  async getProducts(): Promise<ProductType[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table}`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all products. Error: ${parseError(err)}`);
    }
  }

  // select product by id
  async getProductById(productId: number): Promise<ProductType> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table} WHERE id=${productId}`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get product by id. Error: ${parseError(err)}`);
    }
  }

  // select product by category
  async getProductByCat(category: string): Promise<ProductType[]> {
    try {
      const conn = await pool.connect();
      const sql = `SELECT * FROM ${this.table} WHERE category=${category}`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not get product by category. Error: ${parseError(err)}`
      );
    }
  }

  // create product
  async createProduct(
    name: string,
    price: number,
    category: string
  ): Promise<ProductType> {
    try {
      console.log('name: ', name, 'price: ', price, 'cat: ', category);
      const sql = `INSERT INTO ${this.table} (name, price, category) VALUES($1, $2, $3) RETURNING *`;
      const conn = await pool.connect();
      const result = await conn.query(sql, [name, price, category]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create product. Error: ${parseError(err)}`);
    }
  }
}
