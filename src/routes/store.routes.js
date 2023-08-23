import express from "express";
import { createStore, getStore } from "../controllers/store.controller.js";

const router = express.Router();

//create rol
router.post("/", createStore);
router.get("/", getStore);

export default router;