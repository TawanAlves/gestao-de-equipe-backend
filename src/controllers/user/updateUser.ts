import { Request, Response } from "express";
import { User } from "../../models/User";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({
      message: "Erro ao atualizar usuário",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
