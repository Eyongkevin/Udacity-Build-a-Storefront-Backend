import { Router, Response, Request } from 'express';

import { Order } from '../models/Order';
import { authToken } from '../middlewares/auth';

export const OrderController: Router = Router();
const order: Order = new Order();

OrderController.get(
  '/current/:user_id',
  authToken,
  function (req: Request, res: Response) {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder = order.getCurrentOrderByUserId(userId);
    return res.json(currentOrder);
  }
);
OrderController.get(
  '/completed/:user_id',
  authToken,
  function (req: Request, res: Response) {
    const userId: number = parseInt(req.params.user_id);
    const currentOrder = order.getCompletedOrdersByUserId(userId);
    return res.json(currentOrder);
  }
);
