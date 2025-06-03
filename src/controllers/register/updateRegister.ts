import { Request, Response } from "express";
import { Register } from "../../models/Register";

export const updateRegister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedRegister = await Register.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedRegister);
  } catch (error) {
    console.error("Erro ao atualizar registro:", error);
    res.status(500).json({
      message: "Erro ao atualizar registro",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
