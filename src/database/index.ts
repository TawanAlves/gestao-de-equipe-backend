import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI!);

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("MongoDB conectado!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
}
