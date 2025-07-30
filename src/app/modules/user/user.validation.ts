import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        error: 'Name is required',
      })
      .min(1, 'Name cannot be empty')
      .trim(),

    email: z
      .string({
        error: 'Email is required',
      })
      .email('Invalid email format')
      .toLowerCase(),

    password: z
      .string({
        error: 'Password is required',
      })
      .min(6, 'Password must be at least 6 characters'),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
