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

const updateTaskValidationSchema = z.object({
  body: z.object({
    taskCategory: z.enum(taskCategories).optional(),
    taskStatus: z.enum(taskStatuses).optional(),
    details: z.string().min(1, 'Details are required').optional(),
    endDate: z.coerce.date({ message: 'Invalid date format' }).optional(),
  }),
});

export const TaskValidations = {
  createTaskValidationSchema,
  updateTaskValidationSchema,
};
