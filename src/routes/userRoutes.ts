import { Router } from "express";
import { createUser } from "../controllers/user/createUser";
import { getAllUsers } from "../controllers/user/getAllUsers";
import { getUserById } from "../controllers/user/getUserById";
import { deleteUser } from "../controllers/user/deleteUser";
import { updateUser } from "../controllers/user/updateUser";
import { loginUser } from "../controllers/user/loginUser";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";
const router = Router();

router.post("/login", (req, res, next) => {
  Promise.resolve(loginUser(req, res)).catch(next);
});

router.post("/user", authMiddleware, adminMiddleware, createUser);

router.get("/user", authMiddleware, adminMiddleware, getAllUsers);

router.get("/user/:id", authMiddleware, adminMiddleware, getUserById);

router.put("/user/:id", authMiddleware, adminMiddleware, updateUser);

router.delete("/user/:id", authMiddleware, adminMiddleware, deleteUser);

export default router;
