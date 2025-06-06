import { connectDB } from "./database";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import registerRoutes from "./routes/registerRoutes";

import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { authMiddleware } from "./middlewares/authMiddleware";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(loggerMiddleware);
app.get("/", (req, res) => {
  res.send("API rodando");
});
//Routes
app.use("/", userRoutes);
app.use("/", authMiddleware, registerRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

//DB
connectDB();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
