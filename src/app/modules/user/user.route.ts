import express from 'express';
import { userController } from './user.controller';
// import validateRequest from '../../middlewares/validationRequest';
import { userZodValidation } from './user.validation';

const router = express.Router();

// create user
router.post(
  '/create-user',
  // validateRequest(userZodValidation.userZodSchema),
  userController.createUser,
);

// get all user
router.get('/', userController.getAllUser);

// get single user
router.get('/:id', userController.getSingleUser);

// update user
router.patch('/:id', userController.updateUser);

// delete user
router.delete('/:id', userController.deleteUser);

export const userRouter = router;
