import "dotenv/config";
import { connect } from "mongoose";
import { DB_URI } from "./config.ts";

(async function dbConnect(): Promise<void> {
  try {
    const db = await connect(DB_URI);
    console.log(`Connected to DB: ${db.connection.name}`);
  } catch (err) {
    console.log("Db connection failed");
  }
})();
