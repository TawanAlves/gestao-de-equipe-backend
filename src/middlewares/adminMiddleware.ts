import { Request, Response, NextFunction } from "express";
import { User } from "../models/User"; // ajuste o caminho

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = (req as any).user.id;

  try {
    const user = await User.findById(userId);

    if (!user || user.role !== "admin") {
      res.status(403).json({ message: "Acesso negado: apenas admins" });
      return;
    }

    next(); // segue normalmente
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao verificar permissão" });
  }
};
