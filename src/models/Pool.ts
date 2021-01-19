import pg, { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool: pg.Pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    database: process.env.DB_NAME
});