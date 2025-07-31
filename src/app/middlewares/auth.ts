import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
// import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';

const auth = () => {
  // ...requiredRoles: TUserRole[]
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Check whether the token is sent from the client
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    // Check whether the token is valid or not
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    // Check whether the user has the permission to access the resource
    const { email} = decoded;
    // console.log('decoded:', decoded);

    // check the user is exist or not
    const user = await User.isUserExistsByEmail(email);
    // console.log('user:', user);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    // if (requiredRoles && !requiredRoles.includes(role)) {
    //   throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    // }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
