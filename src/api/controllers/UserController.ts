import { Router } from 'express';
import * as User from '../models/User';
import { authToken } from '../middlewares/auth';

export const UserController: Router = Router();

UserController.get('/', User.getUsers);
UserController.get('/:id', authToken, User.getUserById);
UserController.post('/', authToken, User.createUser);
