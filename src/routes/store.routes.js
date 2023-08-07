import express from "express";
import { createStore, getStores } from "../controllers/store.controller.js";
import { verifyToken } from "../helpers/verifyToken.js";

const router = express.Router();

//create rol
router.post("/", createStore);
router.get("/", verifyToken, getStores);

export default router;
