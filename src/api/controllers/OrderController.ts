import { Router } from 'express';
import * as Order from '../models/Order';
import { authToken } from '../middlewares/auth';

export const OrderController: Router = Router();

OrderController.get(
  '/current/:user_id',
  authToken,
  Order.getCurrentOrderByUserId
);
OrderController.get(
  '/completed/:user_id',
  authToken,
  Order.getCompletedOrdersByUserId
);
