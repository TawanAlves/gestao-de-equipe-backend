import { Request, Response } from "express";
import { User } from "../../models/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário", error });
  }
};
