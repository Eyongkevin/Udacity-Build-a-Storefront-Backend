import { Router } from 'express';
import * as Product from '../models/Product'

export const ProductController: Router = Router();

ProductController.get('/', Product.getProducts);
ProductController.get('/:id', Product.getProductById);
ProductController.post('/', Product.createProduct);
