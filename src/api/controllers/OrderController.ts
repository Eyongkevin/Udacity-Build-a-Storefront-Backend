import { Router, Response, Request } from 'express';

import { Order } from '../models/Order';
import { authToken } from '../middlewares/auth';

export const OrderController: Router = Router();
const order: Order = new Order();

OrderController.get(
  '/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder = await order.getOrders(userId);
    return res.json(currentOrder);
  }
);
OrderController.get(
  '/current/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder = await order.getCurrentOrderByUserId(userId);
    return res.json(currentOrder);
  }
);
OrderController.get(
  '/active/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const activeOrder = await order.getActiveOrdersByUserId(userId);
    return res.json(activeOrder);
  }
);
OrderController.get(
  '/completed/:user_id',
  authToken,
  async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder = await order.getCompletedOrdersByUserId(userId);
    return res.json(currentOrder);
  }
);
// http://0.0.0.0:3000/orders?status=complete&orderId=4
OrderController.put('/', authToken, async (req: Request, res: Response) => {
  const status = req.query.status as string;
  const orderId = parseInt(req.query.orderId as string);

  if (orderId && ['active', 'complete'].includes(status)) {
    const updatedOrder = await order.updateOrderStatus(status, orderId);
    return res.json(updatedOrder);
  } else {
    return res.json({ Error: 'Bad parameters' });
  }
});
OrderController.delete(
  '/:id',
  authToken,
  async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deletedOrder = await order.deleteOrder(id);
    return res.json(deletedOrder);
  }
);
OrderController.post('/', authToken, async (req: Request, res: Response) => {
  const newOrder = await order.createOrder(req.body);
  return res.json(newOrder);
});
