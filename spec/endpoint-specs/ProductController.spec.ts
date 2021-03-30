/* eslint-disable no-undef */
import supertest from 'supertest';
import { Product } from '../../src/api/models/Product';
import { server } from '../../src/server';

const request = supertest(server);
const token: string = process.env.TOKEN_TEST as string;

describe('Test Product endpoint responses', () => {
  beforeAll(() => {
    spyOn(Product.prototype, 'getProducts').and.returnValue(
      Promise.resolve([
        {
          id: 1,
          name: 'iphone',
          price: '3000',
          category: 'phone'
        }
      ])
    );
    spyOn(Product.prototype, 'getProductById').and.returnValue(
      Promise.resolve({
        id: 1,
        name: 'iphone',
        price: '3000',
        category: 'phone'
      })
    );
    spyOn(Product.prototype, 'getProductByCat').and.returnValue(
      Promise.resolve([
        {
          id: 1,
          name: 'iphone',
          price: '3000',
          category: 'phone'
        }
      ])
    );
    spyOn(Product.prototype, 'createProduct').and.returnValue(
      Promise.resolve({
        id: 1,
        name: 'iphone',
        price: '3000',
        category: 'phone'
      })
    );
    spyOn(Product.prototype, 'deleteProduct').and.returnValue(
      Promise.resolve({
        id: 1,
        name: 'iphone',
        price: '3000',
        category: 'phone'
      })
    );
  });

  it('gets all products api endpoint', async (done) => {
    const res = await request
      .get('/products')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'iphone',
        price: '3000',
        category: 'phone'
      }
    ]);
    done();
  });
  it('gets product by id api endpoint', async (done) => {
    const res = await request
      .get('/products/1')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: 'iphone',
      price: '3000',
      category: 'phone'
    });
    done();
  });
  it('gets product by category api endpoint', async (done) => {
    const res = await request
      .get('/products/cat/phone')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'iphone',
        price: '3000',
        category: 'phone'
      }
    ]);
    done();
  });
  it('create product api endpoint', async (done) => {
    const res = await request
      .post('/products')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: 'iphone',
      price: '3000',
      category: 'phone'
    });
    done();
  });
  it('delets a product api endpoint', async (done) => {
    const res = await request
      .delete('/products/1')
      .set('Authorization', 'Bearer ' + token);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      name: 'iphone',
      price: '3000',
      category: 'phone'
    });
    done();
  });
});
