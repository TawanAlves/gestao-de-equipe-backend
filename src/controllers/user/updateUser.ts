import { Request, Response } from "express";
import { UserService } from "../../services/UserService/UserService";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedUser = await UserService.updateUser(id, updatedData);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({
      message: "Erro ao atualizar usuário",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
