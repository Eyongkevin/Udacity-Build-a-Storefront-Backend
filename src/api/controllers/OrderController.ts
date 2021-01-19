import { Router } from 'express';
import * as Order from '../models/Order'

export const OrderController: Router = Router();

OrderController.get('/current/:user_id', Order.getCurrentOrdersByUserId);
OrderController.get('/completed/:user_id', Order.getCompletedOrdersByUserId);
