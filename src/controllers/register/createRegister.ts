import { Request, Response } from "express";
import { Register } from "../../models/Register";

export const createRegister = async (req: Request, res: Response) => {
  try {
    const register = await Register.create(req.body);
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar registro", error });
  }
};
