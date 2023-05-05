import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJWT } from "../middlewares/session";

const router = Router();

/* 
http://localhost:5000/api/items 

You can access this route if you have the token.
*/

router.get("/", [checkJWT], getOrders); //[GET] Items

export { router };
