import { Request, Response } from "express";
import { User } from "../../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({
      message: "Erro ao buscar usuários",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
