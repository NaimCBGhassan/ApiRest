import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const generateToken = (_id: string) => {
  const token = sign(_id, JWT_SECRET);

  return token;
};

export const verifyToken = (token: string) => {
  const payload = verify(token, JWT_SECRET);
  return payload;
};
