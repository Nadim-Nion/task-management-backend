import status from 'http-status';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import { createToken } from './user.utils';
import config from '../../config';

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload);

  const { _id, name, email } = user;

  return {
    _id,
    name,
    email,
  };
};

const loginUser = async (payload: TLoginUser) => {
  const { email, password } = payload;

  // Check the user is existed or not
  const user = await User.isUserExistsByEmail(email);

  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User not found');
  }

  if (!(await User.isPasswordMatched(password, user?.password))) {
    throw new AppError(status.UNAUTHORIZED, 'Password is incorrect');
  }

  // Create and send access token to the client
  const jwtPayload = {
    email: user.email,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
};
