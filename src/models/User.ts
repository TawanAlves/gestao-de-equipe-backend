import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    birthday: Date,
    category: { type: String, enum: ["s", "p", "o"] },
    position: String,
    role: { type: String, enum: ["admin", "member"], default: "member" },
    local: { type: String, enum: ["ios", "vtco", "ssa"] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this as any;

  if (!user.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  } catch (error) {
    next(error as Error);
  }
});

export const User = model("User", userSchema);
