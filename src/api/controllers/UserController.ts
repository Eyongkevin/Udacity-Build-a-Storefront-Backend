import { Router } from 'express';
import * as User from '../models/User'

export const UserController: Router = Router();

UserController.get('/', User.getUsers);
UserController.get('/:id', User.getUserById);
UserController.post('/', User.createUser);
