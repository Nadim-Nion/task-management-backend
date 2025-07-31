import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-user',
  auth(),
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser,
);

router.post(
  '/login-user',
  validateRequest(UserValidations.loginUserValidationSchema),
  UserControllers.loginUser,
);

router.post(
  '/reset-password',
  auth(),
  validateRequest(UserValidations.resetPasswordValidationSchema),
  UserControllers.resetPassword,
);

export const UserRoutes = router;
