import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'User is registered successfully!',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is logged in successfully!',
    data: result,
  });
});

const resetPassword = catchAsync(async (req, res) => {
  const { email, newPassword } = req.body;
  const token = req.headers.authorization;

  const result = await UserServices.resetPassword(
    email,
    newPassword,
    token as string,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Password reset successfully!',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  loginUser,
  resetPassword,
};
