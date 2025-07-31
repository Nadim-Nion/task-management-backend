import { z } from 'zod';
import { taskCategories, taskStatuses } from './task.constant';

const createTaskValidationSchema = z.object({
  body: z.object({
    taskCategory: z.enum(taskCategories),
    taskStatus: z.enum(taskStatuses),
    details: z.string().min(1, 'Details are required'),
    endDate: z.coerce.date({ message: 'Invalid date format' }),
  }),
});

export const TaskValidations = {
  createTaskValidationSchema,
};
