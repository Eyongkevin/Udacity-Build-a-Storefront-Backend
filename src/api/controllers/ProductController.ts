import { Router, Response, Request } from 'express';
import { Product } from '../models/Product';
import { ProductType } from '../interfaces/Product';
import { authToken } from '../middlewares/auth';

export const ProductController: Router = Router();
const product: Product = new Product();

// Get all products
ProductController.get('/', async (_: Request, res: Response) => {
  const allProducts: ProductType[] = await product.getProducts();
  return res.json(allProducts);
});
// Get product by id
ProductController.get('/:id', async (req: Request, res: Response) => {
  const productId: number = parseInt(req.params.id);
  const productById: ProductType = await product.getProductById(productId);
  return res.json(productById);
});
// Get products by category
ProductController.get('/cat/:category', async (req: Request, res: Response) => {
  const category: string = String(req.params.category);
  const productByCat: ProductType[] = await product.getProductByCat(category);
  return res.json(productByCat);
});
// Create product
ProductController.post('/', authToken, async (req: Request, res: Response) => {
  const createdProduct: ProductType = await product.createProduct(req.body);
  return res.json(createdProduct);
});
// Delete product by id
ProductController.delete(
  '/:id',
  authToken,
  async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deletedOrder = await product.deleteProduct(id);
    return res.json(deletedOrder);
  }
);
