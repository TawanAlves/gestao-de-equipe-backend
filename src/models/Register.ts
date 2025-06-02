import { Schema, Types, model } from "mongoose";

const registerSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: Date, required: true },
    quantity: { type: Number, defalt: 0 },
    reading: { type: Boolean, default: false },
    visit: { type: Boolean, default: false },
    receive: { type: Boolean, default: false },
  }
  // { timestamps: true }
);

export const Register = model("Register", registerSchema);
