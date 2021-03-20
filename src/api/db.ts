import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

interface parseErrorTypes {
  [code: string]: string;
}
console.log('ENV: ', process.env.ENVI);
export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  database:
    process.env.ENVI === 'test' ? process.env.DB_NAME_TEST : process.env.DB_NAME
});

// eslint-disable-next-line no-undef
export const parseError = (err: NodeJS.ErrnoException) => {
  const errorCodes: parseErrorTypes = {
    '08003': 'connection_does_not_exist',
    '08006': 'connection_failure',
    '42601': 'syntax_error',
    '42501': 'insufficient_privilege',
    '42602': 'invalid_name',
    '42622': 'name_too_long',
    '42939': 'reserved_name',
    '42703': 'undefined_column',
    '42000': 'syntax_error_or_access_rule_violation',
    '42P01': 'undefined_table',
    '2F002': 'modifying_sql_data_not_permitted',
    '57P03': 'cannot_connect_now',
    '42P02': 'undefined_parameter'
  };

  if (err !== undefined) {
    if (err.message !== undefined) {
      console.log('ERROR message:', err.message);
    }

    if (err.code !== undefined) {
      console.log('Postgres error code:', err.code);

      if (errorCodes[err.code] !== undefined) {
        console.log('Error code details:', errorCodes[err.code]);
      }
    }

    if (err.code === undefined) {
      console.log('Unknown Postgres error:', err);
    }
  }
};
