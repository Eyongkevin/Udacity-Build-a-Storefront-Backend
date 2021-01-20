import { Router } from 'express';
import * as Product from '../models/Product';
import { authToken } from '../middlewares/auth';

export const ProductController: Router = Router();

ProductController.get('/', Product.getProducts);
ProductController.get('/:id', Product.getProductById);
ProductController.get('/:category', Product.getProductByCat);
ProductController.post('/', authToken, Product.createProduct);
