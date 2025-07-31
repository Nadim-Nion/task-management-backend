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

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
  }),
});

const resetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    newPassword: z
      .string()
      .min(6, { message: 'New password must be at least 6 characters long' }),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  loginUserValidationSchema,
  resetPasswordValidationSchema,
};
