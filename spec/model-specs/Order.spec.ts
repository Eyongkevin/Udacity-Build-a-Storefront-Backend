import { Order } from '../../src/api/models/Order';
import { Product } from '../../src/api/models/Product';
import { User } from '../../src/api/models/User';
import { OrderType, OrderReturnType } from '../../src/api/interfaces/Order';

const order = new Order();
let product;
let user;
describe('Order Model', () => {
  // beforeAll(async function (done) {
  //   product = new Product();
  //   user = new User();
  //   await user.createUser({
  //     firstname: 'kevin',
  //     lastname: 'eyong',
  //     password: 'thisismeenow2020#'
  //   });
  //   await product.createProduct({
  //     name: 'iPhone',
  //     price: '645',
  //     category: 'phone'
  //   });
  //   done();
  // });
  // afterAll(async function (done) {
  //   await user.({
  //     firstname: 'kevin',
  //     lastname: 'eyong',
  //     password: 'thisismeenow2020#'
  //   });
  //   await product.de({
  //     name: 'iPhone',
  //     price: '645',
  //     category: 'phone'
  //   });
  //   done();
  // });

  it('should have an getCurrentOrderByUserId  method', () => {
    expect(order.getCurrentOrderByUserId).toBeDefined();
  });
  it('should have a getCompletedOrdersByUserId method', () => {
    expect(order.getCompletedOrdersByUserId).toBeDefined();
  });
  it('should have an getActiveOrdersByUserId  method', () => {
    expect(order.getActiveOrdersByUserId).toBeDefined();
  });
  it('should have a getOrders method', () => {
    expect(order.getOrders).toBeDefined();
  });
  it('should have an updateOrderStatus  method', () => {
    expect(order.updateOrderStatus).toBeDefined();
  });
  it('should have a deleteOrder method', () => {
    expect(order.deleteOrder).toBeDefined();
  });
  it('should have a createOrder method', () => {
    expect(order.createOrder).toBeDefined();
  });
  // it('createOrder method should create an order', async () => {
  //   const result: OrderReturnType = await order.createOrder({
  //     productId: 1,
  //     quantity: 10,
  //     userId: 1,
  //     status: 'active'
  //   });
  //   expect(result).toEqual({
  //     id: 1,
  //     product_id: 1,
  //     quantity: 10,
  //     user_id: 1,
  //     status: 'active'
  //   });
  // });
});
