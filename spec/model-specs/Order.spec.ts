/* eslint-disable no-undef */
import { Order } from '../../src/api/models/Order';

const order: Order = new Order();

describe('Order Model', () => {
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
});
