import "dotenv/config";
import morgan from "morgan";
import express from "express";
import cors from "cors";

import { router } from "./routes/index.ts";
//import { itemRoute } from "./routes/item.ts";

const PORT = process.env.PORT || 5000;

const app = express();

//   MIDDELWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

//   ROUTES
//app.use("/api", itemRoute);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
