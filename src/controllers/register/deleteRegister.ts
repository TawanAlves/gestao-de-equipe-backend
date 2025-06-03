import { Request, Response } from "express";
import { Register } from "../../models/Register";

export const deleteRegister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Register.deleteOne({ _id: id });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar registro",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
