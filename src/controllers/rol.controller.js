import Rol from "../models/rol.js";

// Crear un nuevo rol
export const createRol = async (req, res) => {
    console.log("create rol");
    const { name, description, rights } = req.body;
    console.log(name, description, rights);
    try {
      const newRol = await Rol.create({ name, description, rights });
      res.status(201).json(newRol);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  export const getRol = async (req, res) => {
    console.log("hola")
    try {
      const rolItem = await Rol.find().exec();
      if (rolItem.length) return res.json({ status: 201, rolItem });
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Error al obtener los user" });
    }
  };
  