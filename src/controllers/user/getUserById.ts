import { Request, Response } from "express";
import { User } from "../../models/User";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({
      message: "Erro ao buscar usuário",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
