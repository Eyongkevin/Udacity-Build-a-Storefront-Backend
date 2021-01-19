import { pool } from './Pool';

// define table
const table = 'product';

// set error message
pool.on('error', (err, client) => `Error, ${err},  occured on ${client}`);

// select all products
const getProducts = async (req, res) => {
    const allProducts = await pool.query(
        `SELECT * FROM ${table};`
    );
    res.status(200).json(allProducts.rows);

};

// select product by id
const getProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    const productById = await pool.query(
        `SELECT * FROM ${table} WHERE id = $1`, [id]
    );
    res.status(200).json(productById.rows[0]);

};

// select product by category
const getProductByCat = async (req, res) => {
    const cat = parseInt(req.params.category);
    const productByCat = await pool.query(
        `SELECT * FROM ${table} WHERE category = $1`, [cat]
    );
    res.status(200).json(productByCat.rows);

};

// create a product
const createProduct = async (req, res) => {
    const { name, price, category } = req.body;
    const addProduct = await pool.query(
        `INSERT INTO ${table} (name, price, category) VALUES($1, $2, $3) RETURNING *`,
        [name, price, category]
    );
    res.status(200).json(addProduct.rows[0]);

};

// update
// delete
// where
