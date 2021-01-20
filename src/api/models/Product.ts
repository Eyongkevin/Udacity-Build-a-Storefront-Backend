import { pool, parseError } from '../db';
import { Response, Request, NextFunction } from 'express'

// define table
const table: String = 'product';

// set error message
// pool.on('error', (err, client) => `Error, ${err},  occured on ${client}`);

// select all products
const getProducts = (req: Request, res: Response, next: NextFunction) => {
    pool.query(`SELECT * FROM ${table};`, (error, results) => {
        if (error) {
            parseError(error);
            next(error)
        } else{
            res.status(200).json(results.rows);
        }
    });

};

// select product by id
const getProductById = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    pool.query(`SELECT * FROM ${table} WHERE id = $1`, 
        [id],
        (error, results) => {
            if (error) {
                parseError(error);
                next(error)
            } else{
                res.status(200).json(results.rows[0]);
            }
        }
    );
};

// select product by category
const getProductByCat = (req: Request, res: Response, next: NextFunction) => {
    const cat = req.params.category;
    pool.query(`SELECT * FROM ${table} WHERE category = $1`, 
        [cat],
        (error, results) => {
            if (error) {
                parseError(error);
                next(error)
            } else{
                res.status(200).json(results.rows);
            }
        });
};

// create a product
const createProduct = (req: Request, res: Response, next: NextFunction) => {
    const { name, price, category } = req.body;
    pool.query(`INSERT INTO ${table} (name, price, category) VALUES($1, $2, $3) RETURNING *`,
        [name, price, category],
        (error, results) => {
            if (error) {
                parseError(error);
                next(error)
            } else{
                res.status(200).json(results.rows[0]);
            }
        }
    );
};

// update
// delete
// where

export {
    getProducts,
    getProductById,
    getProductByCat,
    createProduct
}