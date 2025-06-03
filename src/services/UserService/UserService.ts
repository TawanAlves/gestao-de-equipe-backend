import { User } from "../../models/User";
import bcrypt from "bcryptjs";

export class UserService {
  static async createUser(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      throw new Error("Email já existe");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });
    await user.save();
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  }

  static async getAllUsers() {
    return await User.find().select("-password");
  }

  static async getUserById(id: string) {
    const user = await User.findById(id).select("-password");
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  }

  static async updateUser(
    id: string,
    data: Partial<{ name: string; email: string; password: string }>
  ) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const user = await User.findByIdAndUpdate(id, data, { new: true }).select(
      "-password"
    );
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  }

  static async deleteUser(id: string) {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return { message: "Usuário deletado com sucesso" };
  }
}
