import express from 'express';
import {
  getAllUser,
  createUser,
  deleteUser,
  getUserById,
} from '../controller/users.js';

const userRouter = express.Router();

userRouter.get('/', getAllUser);
userRouter.post('/post', createUser);
userRouter.route('/:id').delete(deleteUser).get(getUserById);

export default userRouter;
