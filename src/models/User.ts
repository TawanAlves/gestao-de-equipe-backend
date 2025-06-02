import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    birthday: Date,
    category: { type: String, enum: ["s", "p", "o"] },
    position: String,
    role: { type: String, enum: ["admin", "member"], default: "member" },
    local: { type: String, enum: ["ios", "vtco", "ssa"] },
  }
  // { timestamps: true }
);

export const User = model("User", userSchema);
