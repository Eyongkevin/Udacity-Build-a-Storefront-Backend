import { Product } from '../../src/api/models/Product';

const product = new Product();

describe('Product Model', () => {
  it('should have an createProduct  method', () => {
    expect(product.createProduct).toBeDefined();
  });
  it('should have a getProductByCat method', () => {
    expect(product.getProductByCat).toBeDefined();
  });
  it('should have a getProductById method', () => {
    expect(product.getProductById).toBeDefined();
  });
  it('should have a getProducts method', () => {
    expect(product.getProducts).toBeDefined();
  });
});
