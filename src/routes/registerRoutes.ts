import { Router } from "express";
import { createRegister } from "../controllers/register/createRegister";
import { getAlRegisters } from "../controllers/register/getAllRegisters";
import { getRegisterById } from "../controllers/register/getRegisterById";
import { deleteRegister } from "../controllers/register/deleteRegister";
import { updateRegister } from "../controllers/register/updateRegister";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", authMiddleware, createRegister);

router.get("/register", adminMiddleware, getAlRegisters);

router.get("/register/:id", getRegisterById);

router.put("/register/:id", updateRegister);

router.delete("/register/:id", deleteRegister);

export default router;
