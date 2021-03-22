import { Router, Request, Response } from 'express';
import { User } from '../models/User';
import { authToken } from '../middlewares/auth';

export const UserController: Router = Router();
const user = new User();

UserController.get('/', authToken, async (_: Request, res: Response) => {
  const allUsers = await user.getUsers();
  return res.json(allUsers);
});
UserController.get('/:id', authToken, async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const allUsers = await user.getUserById(userId);
  return res.json(allUsers);
});
UserController.post('/', authToken, async (req: Request, res: Response) => {
  const newUser = await user.createUser(req.body);
  return res.json(newUser);
});
UserController.delete(
  '/:id',
  authToken,
  async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const deletedOrder = await user.deleteUser(id);
    return res.json(deletedOrder);
  }
);
