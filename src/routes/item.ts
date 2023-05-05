import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();

/* http://localhost:5000/api/items */

router.get("/", getItems); //[GET]s Items
router.get("/:id", [logMiddleware], getItem); //[GET] Item
router.put("/:id", updateItem); //[PUT] Items
router.post("/", postItem); //[POST] Items
router.delete("/:id", deleteItem); //[DELETE] Items

export { router };
