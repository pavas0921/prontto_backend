import express from "express";
import { createClient, getAllClients, getClientByCedula } from "../controllers/client.controller.js";

const router = express.Router()

//Crear un cliente
router.post("/", createClient)
//Obtener todos los clientes
router.get("/", getAllClients)
//Obtener cliente por cedula
router.get("/:id", getClientByCedula)

export default router

