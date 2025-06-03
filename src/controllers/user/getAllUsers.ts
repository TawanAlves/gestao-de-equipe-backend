import { Request, Response } from "express";
import { UserService } from "../../services/UserService/UserService";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getAllUsers();
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({
      message: "Erro ao buscar usuários",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
