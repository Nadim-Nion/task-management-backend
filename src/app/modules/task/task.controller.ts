import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TaskServices } from './task.service';

const createTask = catchAsync(async (req, res) => {
  const token = req.headers.authorization;

  const result = await TaskServices.createTaskIntoDB(req.body, token as string);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Task is created successfully',
    data: result
  })
});

export const TaskControllers = {
  createTask,
};
