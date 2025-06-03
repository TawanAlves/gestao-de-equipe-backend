import { Request, Response } from "express";
import { Register } from "../../models/Register";

export const getAlRegisters = async (req: Request, res: Response) => {
  try {
    const registers = await Register.find();
    res.status(200).json(registers);
  } catch (error) {
    console.error("Erro ao buscar registros:", error);
    res.status(500).json({
      message: "Erro ao buscar registros",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
