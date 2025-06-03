import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../../models/User";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });
    const isMatch = await bcrypt.compare(password, String(user.password));
    if (!isMatch) return res.status(401).json({ message: "Senha incorreta" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Erro ao logar:", error);
    res.status(500).json({
      message: "Erro ao logar",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
