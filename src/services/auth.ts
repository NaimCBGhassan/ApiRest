import UserModel from "../models/auth";
import { User } from "../types/user.interface";
import { Auth } from "../types/auth.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

/* [POST] register*/
export const registerNewUser = async ({ email, password, name, description }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return { error: "USER_ALREADY_EXIST" }; // If email exist, we can´t register again.

  const passHash = await encrypt(password); // Encrypted password (bscryptjs)

  const registerUser = await UserModel.create({ email, password: passHash, name, description });

  return registerUser;
};

/* [POST] login*/
export const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) return { error: "USER_NOT_FOUND" }; // If email not exist, the user can´t login.

  const isCorrect = await verified(password, checkIs.password); // Compare password vs passHash (bscryptjs)

  if (!isCorrect) return { error: "INVALID_PASSWORD" };

  const token = generateToken(checkIs.email);

  return { token, _id: checkIs._id, email: checkIs.email, name: checkIs.name, description: checkIs.description };
};
