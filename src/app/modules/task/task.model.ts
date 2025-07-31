import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';
import { taskCategories, taskStatuses } from './task.constant';

const taskSchema = new Schema<TTask>({
  //   _id: {
  //     type: Schema.Types.ObjectId,
  //   },
  taskCategory: {
    type: String,
    enum: taskCategories,
    required: true,
  },
  taskStatus: {
    type: String,
    enum: taskStatuses,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

export const Task = model<TTask>('Task', taskSchema);
