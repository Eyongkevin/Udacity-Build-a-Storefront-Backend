import { Order } from '../../src/api/models/Order';
// import { OrderType } from '../../src/api/interfaces/Order';

const order = new Order();

describe('Order Model', () => {
  it('should have an getCurrentOrderByUserId  method', () => {
    expect(order.getCurrentOrderByUserId).toBeDefined();
  });

  it('should have a getCompletedOrdersByUserId method', () => {
    expect(order.getCompletedOrdersByUserId).toBeDefined();
  });
});
