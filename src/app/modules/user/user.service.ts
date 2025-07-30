import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload);

  const { _id, name, email } = user;

  return {
    _id,
    name,
    email,
  };
};

export const UserServices = {
  createUserIntoDB,
};
