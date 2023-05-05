import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request {
  user?: string | JwtPayload;
}

export const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization || "";

    //split on whitespace, generate an array and remove last item
    const token = bearerToken.split(" ").pop();
    if (!token) return res.status(401).send({ error: "TOKEN_NOT_EXIST" }); // Verify token exist

    req.user = verifyToken(token);

    next();
  } catch (error) {
    res.status(400).send({ error: "INVALID_TOKEN" });
  }
};
