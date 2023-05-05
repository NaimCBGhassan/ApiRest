import { Schema, model, Types, Model } from "mongoose";
import { User } from "../types/user.interface";

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "I'm the description",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("users", UserSchema);
