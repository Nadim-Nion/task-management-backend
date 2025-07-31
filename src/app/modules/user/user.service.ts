import status from 'http-status';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import { createToken, verifyToken } from './user.utils';
import config from '../../config';
import bcrypt from 'bcrypt';

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

const resetPassword = async (
  email: string,
  newPassword: string,
  token: string,
) => {
  // check the user is exist or not
  const user = await User.isUserExistsByEmail(email);

  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User not found');
  }

  // Check whether the token is valid or not
  const decoded = verifyToken(token, config.jwt_access_secret as string);

  if (email !== decoded?.email) {
    throw new AppError(status.FORBIDDEN, ' Yor are forbidden');
  }

  // Hash the new password before storing to the DB
  const newHashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.bcrypt_salt_round),
  );

  const result = await User.findOneAndUpdate(
    {
      email: decoded.email,
    },
    {
      password: newHashedPassword,
    },
    {
      new: true,
    },
  );

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'User not found!');
  }

  const { _id, name, email: userEmail } = result;

  return { _id, name, email: userEmail };
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
  resetPassword,
};
