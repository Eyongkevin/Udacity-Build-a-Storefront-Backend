import { Router, Response, Request } from 'express';
import { Product } from '../models/Product';
import { authToken } from '../middlewares/auth';

export const ProductController: Router = Router();
const product: Product = new Product();

ProductController.get('/', async (_: Request, res: Response) => {
  const allProducts = await product.getProducts();
  return res.json(allProducts);
});
ProductController.get('/:id', async (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id);
  const productById = await product.getProductById(productId);
  return res.json(productById);
});
ProductController.get('/:category', async (req: Request, res: Response) => {
  const category: string = String(req.params.category);
  const productByCat = await product.getProductByCat(category);
  return res.json(productByCat);
});
ProductController.post('/', authToken, async (req: Request, res: Response) => {
  const { name, price, category } = req.body;
  const createdProduct = await product.createProduct(name, price, category);
  console.log('result: ', createdProduct);
  return res.json(createdProduct);
});
