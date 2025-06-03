import { Router } from "express";
import { createRegister } from "../controllers/register/createRegister";
import { getAlRegisters } from "../controllers/register/getAllRegisters";
import { getRegisterById } from "../controllers/register/getRegisterById";
import { deleteRegister } from "../controllers/register/deleteRegister";
import { updateRegister } from "../controllers/register/updateRegister";
const router = Router();

router.post("/register", createRegister);

router.get("/register", getAlRegisters);

router.get("/register/:id", getRegisterById);

router.put("/register/:id", updateRegister);

router.delete("/register/:id", deleteRegister);

export default router;
