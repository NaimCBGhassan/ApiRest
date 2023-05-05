import { Response } from "express";

/* [GET]s service*/
export const getOrders = async (res: Response) => {
  res.send("If you are capable of accessing here, then you have the JWT token.");
};
