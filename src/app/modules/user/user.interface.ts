import { Model } from "mongoose";

/* eslint-disable no-unused-vars */
export type TUser = {
  name: string;
  email: string;
  password: string;
};

export interface UserModelType extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
