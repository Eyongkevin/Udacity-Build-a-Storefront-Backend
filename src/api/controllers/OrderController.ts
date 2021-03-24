import { Router, Response, Request } from 'express';

import { Order } from '../models/Order';
import { OrderReturnType, OrderType } from '../interfaces/Order';
import { authToken } from '../middlewares/auth';

export const OrderController: Router = Router();
const order: Order = new Order();

// Get all orders by user id
OrderController.get(
  '/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder: OrderReturnType[] = await order.getOrders(userId);
    return res.json(currentOrder);
  }
);
// Get current order by user id
OrderController.get(
  '/current/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder: OrderReturnType = await order.getCurrentOrderByUserId(
      userId
    );
    return res.json(currentOrder);
  }
);
// Get active order by user id
OrderController.get(
  '/active/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const activeOrder: OrderReturnType[] = await order.getActiveOrdersByUserId(
      userId
    );
    return res.json(activeOrder);
  }
);
// Get all completed orders by user id
OrderController.get(
  '/completed/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder: OrderReturnType[] = await order.getCompletedOrdersByUserId(
      userId
    );
    return res.json(currentOrder);
  }
);

// Update order's status.
OrderController.put('/', authToken, async (req: Request, res: Response) => {
  const status = req.query.status as string;
  const orderId = parseInt(req.query.orderId as string);

  if (orderId && ['active', 'complete'].includes(status)) {
    const updatedOrder: OrderReturnType = await order.updateOrderStatus(
      status,
      orderId
    );
    return res.json(updatedOrder);
  } else {
    return res.status(400).json({ Error: 'Bad parameters' });
  }
});
// delete order by order id
OrderController.delete(
  '/:id',
  authToken,
  async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deletedOrder: OrderReturnType = await order.deleteOrder(id);
    return res.json(deletedOrder);
  }
);
// create order
OrderController.post('/', authToken, async (req: Request, res: Response) => {
  const newOrder: OrderType = await order.createOrder(req.body);
  return res.json(newOrder);
});
