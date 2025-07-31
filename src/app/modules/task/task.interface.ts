import { Types } from 'mongoose';

export type TTaskCategory =
  | 'Arts and Craft'
  | 'Nature'
  | 'Family'
  | 'Sport'
  | 'Friends'
  | 'Meditation';

export type TTaskStatus = 'Ongoing' | 'Pending' | 'Collaborative Task' | 'Done';

export type TTask = {
  taskCategory: TTaskCategory;
  taskStatus: TTaskStatus;
  details: string;
  endDate: Date;
  userId: Types.ObjectId;
};
