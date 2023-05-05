import { hash, compare } from "bcryptjs";

export const encrypt = async (pass: string): Promise<string> => {
  const passwordHash: string = await hash(pass, 8);
  return passwordHash;
};
export const verified = async (pass: string, passHash: string): Promise<boolean> => {
  const isCorrect: boolean = await compare(pass, passHash);
  return isCorrect;
};
