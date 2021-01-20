import { Router } from 'express';
import * as Order from '../models/Order'
import { auth_token } from '../middlewares/auth'

export const OrderController: Router = Router();

OrderController.get('/current/:user_id', auth_token, Order.getCurrentOrderByUserId);
OrderController.get('/completed/:user_id', auth_token, Order.getCompletedOrdersByUserId);
