import "dotenv/config";
import morgan from "morgan";
import express, { Request, Response } from "express";
import cors from "cors";

import { router } from "./routes/index";
//import { itemRoute } from "./routes/item.ts";

import { PORT } from "./config";
import "./db";

const app = express();

//   MIDDELWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//   ROUTES
app.use(router);
app.get("/", (req: Request, res: Response) =>
  res.json({
    item: {
      "[GET]s": "/api/item",
      "[GET]": "/api/item/:id",
      "[POST]": "/api/item",
      "[PUT]": "./api/item/:id",
      "[DELETE]": "/api/item/:id",
    },
    auth: {
      register: {
        method: "[POST]",
        endpoint: "/api/auth/register",
      },
      login: {
        method: "[POST]",
        endpoint: "/api/auth/login",
      },
    },
    order: "/api/order",
  })
);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
