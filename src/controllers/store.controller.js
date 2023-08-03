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
  