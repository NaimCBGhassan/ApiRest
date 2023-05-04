import { Request, Response, Router } from "express";

const itemRoute = Router();

// GET ITEMS
itemRoute.get("/items", (req: Request, res: Response) => {
  res.send("hola");
});

export { itemRoute };
