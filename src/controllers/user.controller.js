import bcrypt from "bcrypt";
import User from "../models/user.js";


// Constantes para códigos de estado HTTP
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    const { name, lastname, id, email, password, idRol, idStore  } = req.body;
        const hash = bcrypt.hashSync(password, 12);
    try {
      const user = await User.create({
        name, lastname, id, email, password: hash, idRol, idStore
      });
      res.status(201).json({ status: 201, user });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };
  