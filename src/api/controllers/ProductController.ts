import { Router } from 'express';
import * as Product from '../models/Product'
import { auth_token } from '../middlewares/auth'

export const ProductController: Router = Router();

ProductController.get('/', Product.getProducts);
ProductController.get('/:id', Product.getProductById);
ProductController.post('/', auth_token, Product.createProduct);
