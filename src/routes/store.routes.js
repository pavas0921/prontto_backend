import express from "express";
import { createStore } from "../controllers/store.controller.js";

const router = express.Router();

//create rol
router.post("/", createStore);

export default router;