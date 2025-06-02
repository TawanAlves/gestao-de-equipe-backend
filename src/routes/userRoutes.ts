import { Router } from "express";
import { createUser } from "../controllers/createUserController";
import { getAllUsers } from "../controllers/getAllUsersController";
import { getUserById } from "../controllers/getUserByIdController";
import { deleteUser } from "../controllers/deleteUserController";
import { updateUser } from "../controllers/updateUserController";
const router = Router();

router.post("/user", createUser);

router.get("/user", getAllUsers);

router.get("/user/:id", getUserById);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
