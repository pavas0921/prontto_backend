import express from "express";
import { createRol, getRoles } from "../controllers/rol.controller.js";
import { verifyToken } from "../helpers/verifyToken.js";

const router = express.Router();

//create rol
router.post("/", createRol);
router.get("/", verifyToken, getRoles);

export default router;
