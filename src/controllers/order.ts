import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../middlewares/session";

/* [GET]s Items */
export const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({
      message: "If you are capable of accessing here, then you have the JWT token.",
      user: req?.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};
