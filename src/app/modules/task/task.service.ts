import status from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { verifyToken } from '../user/user.utils';
import { TTask } from './task.interface';
import { Task } from './task.model';

const createTaskIntoDB = async (payload: TTask, token: string) => {
  // Check whether the token is valid or not
  const decoded = verifyToken(token, config.jwt_access_secret as string);

  const { email } = decoded;

  const user = await User.isUserExistsByEmail(email);
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User is not found');
  }

  const taskData = { ...payload, userId: user._id };

  const result = await Task.create(taskData);

  return result;
};

const getAllTasksFromDB = async () => {
  const result = await Task.find().populate('userId');
  return result;
};

const getSingleTaskFromDB = async (taskId: string) => {
  const result = await Task.findById(taskId).populate('userId');

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'Task is not found');
  }

  return result;
};

const updateTaskIntoDB = async (taskId: string, payload: Partial<TTask>) => {
  const result = await Task.findByIdAndUpdate(taskId, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const TaskServices = {
  createTaskIntoDB,
  getAllTasksFromDB,
  getSingleTaskFromDB,
  updateTaskIntoDB,
};
