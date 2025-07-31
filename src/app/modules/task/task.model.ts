import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';
import { taskCategories, taskStatuses } from './task.constant';

const taskSchema = new Schema<TTask>({
  taskCategory: {
    type: String,
    enum: taskCategories,
    required: [true, 'Task Category is required'],
  },
  taskStatus: {
    type: String,
    enum: taskStatuses,
    required: [true, 'Task Status is required'],
  },
  details: {
    type: String,
    required: [true, 'Task Details are required'],
  },
  endDate: {
    type: Date,
    required: [true, 'Task End Date is required'],
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
});

export const Task = model<TTask>('Task', taskSchema);
