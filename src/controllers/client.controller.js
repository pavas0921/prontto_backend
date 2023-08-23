
import Client from "../models/client.js";


// Constantes para códigos de estado HTTP
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;
const HTTP_CREATED = 201
const HTTP_OK = 200
const HTTP_NO_CONTENT = 204

// Crear un nuevo cliente
export const createClient = async (req, res) => {
    const { name, lastname, id, address, phone, email} = req.body;
    try {
      const client = await Client.create({
        name, lastname, id, address, phone, email
      });
      res.status(HTTP_CREATED).json({ status: HTTP_CREATED, message: "Cliente creado con éxito", client });
    } catch (error) {
      console.log(error);
      res.status(HTTP_INTERNAL_SERVER_ERROR).json({ status: HTTP_INTERNAL_SERVER_ERROR, message: "Error al crear el cliente" });
    }
  };

  //Obtener todos los clientes
  export const getAllClients = async (req, res) => {
    try {
        const item = await Client.find().exec()
        if(item.length > 0){
            return res.json({ status: HTTP_OK, item });  
        }else{
            return res.json({ status: HTTP_NO_CONTENT, item });  
        }
    } catch (error) {
        res.status(HTTP_INTERNAL_SERVER_ERROR).json({ status: HTTP_INTERNAL_SERVER_ERROR, error: "Hubo un error al obtener los user" });
    }    
  }

  //Obtener cliente por cedula
  export const getClientByCedula = async (req, res) => {
    const {id} = req.params
    try {
      const item = await Client.find({id}).exec();
      if(item.length > 0){
        return res.json({ status: HTTP_OK, item });  
    }else{
        return res.json({ status: HTTP_NO_CONTENT, item });  
    }
  
    } catch (error) {
        console.log(error)
        res.status(HTTP_INTERNAL_SERVER_ERROR).json({ status: HTTP_INTERNAL_SERVER_ERROR, error: "Hubo un error al obtener los user" });
    }  
  };