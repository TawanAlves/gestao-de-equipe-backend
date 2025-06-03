import { Request, Response } from "express";
import { Register } from "../../models/Register";

export const getRegisterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const register = await Register.findById(id);
    res.status(200).json(register);
  } catch (error) {
    console.error("Erro ao buscar registro:", error);
    res.status(500).json({
      message: "Erro ao buscar registro",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
