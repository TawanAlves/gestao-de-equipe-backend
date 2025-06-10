import { Request, Response } from "express";
import { Register } from "../../models/Register";

export const createRegister = async (req: Request, res: Response) => {
  const user = (req as any).user;
  const userId = user?.id;

  if (!userId) {
    res.status(400).json({ message: "Usuário não identificado" });
    return;
  }

  try {
    const register = new Register({
      ...req.body,
      userId,
    });

    await register.save();
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar registro", error });
  }
};
