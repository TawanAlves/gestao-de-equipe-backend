import { Request, Response } from "express";
import { UserService } from "../../services/UserService/UserService";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar usuário",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
