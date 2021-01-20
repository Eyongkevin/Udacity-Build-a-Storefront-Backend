import { Router } from 'express';
import * as User from '../models/User'
import { auth_token } from '../middlewares/auth'

export const UserController: Router = Router();

UserController.get('/', User.getUsers);
UserController.get('/:id', auth_token, User.getUserById);
UserController.post('/', auth_token, User.createUser);
