import Store from "../models/store.js";

// Crear un nuevo store
export const createStore = async (req, res) => {

    console.log("create store");
    const { name, address, phone, nit } = req.body;
    try {
      const newStore = await Store.create({ name, address, phone, nit  });
      res.status(201).json(newStore);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  };

  export const getStore = async (req, res) => {
    try {
      const item = await Store.find().exec();
      if (item.length) return res.json({ status: 201, item });
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Error al obtener los user" });
    }
  };
