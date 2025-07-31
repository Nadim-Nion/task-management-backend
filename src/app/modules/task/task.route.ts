import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TaskControllers } from './task.controller';
import auth from '../../middlewares/auth';
import { TaskValidations } from './task.validation';

const router = express.Router();

router.post(
  '/create-task',
  auth(),
  validateRequest(TaskValidations.createTaskValidationSchema),
  TaskControllers.createTask,
);

router.get('/', TaskControllers.getAllTasks);

router.get('/:taskId', auth(), TaskControllers.getSingleTask);

export const TaskRoutes = router;
