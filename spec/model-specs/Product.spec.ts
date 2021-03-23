/* eslint-disable no-undef */
import { Product } from '../../src/api/models/Product';
import { ProductReturnType } from '../../src/api/interfaces/Product';

const product: Product = new Product();

describe('Product Model', () => {
  it('should have a createProduct  method', () => {
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
  it('should have a deleteProduct method', () => {
    expect(product.deleteProduct).toBeDefined();
  });
  it('createProduct method should create a product', async () => {
    const result: ProductReturnType = await product.createProduct({
      name: 'iPhone',
      price: '645',
      category: 'phone'
    });
    expect(result).toEqual({
      id: 2,
      name: 'iPhone',
      price: '645',
      category: 'phone'
    });
  });
  it('getProducts method should return a list of products', async () => {
    const result: ProductReturnType[] = await product.getProducts();
    expect(result).toEqual([
      {
        id: 2,
        name: 'iPhone',
        price: '645',
        category: 'phone'
      }
    ]);
  });

  it('getProductById method should return the correct product', async () => {
    const result: ProductReturnType = await product.getProductById(2);
    expect(result).toEqual({
      id: 2,
      name: 'iPhone',
      price: '645',
      category: 'phone'
    });
  });
  it('getProductByCat method should return the correct product', async () => {
    const result: ProductReturnType[] = await product.getProductByCat('phone');
    expect(result).toEqual([
      {
        id: 2,
        name: 'iPhone',
        price: '645',
        category: 'phone'
      }
    ]);
  });
  it('deleteProduct method should delete the correct product', async () => {
    const result: ProductReturnType = await product.deleteProduct(2);
    expect(result).toEqual({
      id: 2,
      name: 'iPhone',
      price: '645',
      category: 'phone'
    });
  });
});
