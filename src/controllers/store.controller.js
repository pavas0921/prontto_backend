import Store from "../models/store.js";

// Crear un nuevo store
export const createStore = async (req, res) => {
  console.log("create store");
  const { name, address, phone, nit } = req.body;
  try {
    const newStore = await Store.create({ name, address, phone, nit });
    res.status(201).json(newStore);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//get all stores
export const getStores = async (req, res) => {
  try {
    const dataStore = await Store.find().exec();
    if (dataStore.length) return res.json({ status: 201, dataStore });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener los user" });
  }
};
