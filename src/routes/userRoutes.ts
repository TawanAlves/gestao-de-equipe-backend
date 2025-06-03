import { Router } from "express";
import { createUser } from "../controllers/user/createUser";
import { getAllUsers } from "../controllers/user/getAllUsers";
import { getUserById } from "../controllers/user/getUserById";
import { deleteUser } from "../controllers/user/deleteUser";
import { updateUser } from "../controllers/user/updateUser";
const router = Router();

router.post("/user", createUser);

router.get("/user", getAllUsers);

router.get("/user/:id", getUserById);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
