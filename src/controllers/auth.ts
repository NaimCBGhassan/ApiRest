import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { loginUser, registerNewUser } from "../services/auth";
import { Auth } from "../types/auth.interface";

/* [POST] register */
export const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const newUser = await registerNewUser(body);
    res.send(newUser);
  } catch (e) {
    handleHttp(res, "ERROR_REGISTER", e);
  }
};

/* [POST] login */
export const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password }: Auth = body;

    const loggedUser = await loginUser({ email, password });

    //To send correct code status.
    if (isLoginError(loggedUser)) {
      if (loggedUser.error === "USER_NOT_FOUND") return res.status(404).send(loggedUser);
      if (loggedUser.error === "INVALID_PASSWORD") return res.status(403).send(loggedUser);
    }

    res.send(loggedUser);
  } catch (e) {
    handleHttp(res, "ERROR_LOGIN", e);
  }
};

//loggedUser narrow
function isLoginError(loggedUser: any): loggedUser is { error: string } {
  return loggedUser && typeof loggedUser.error === "string";
}
