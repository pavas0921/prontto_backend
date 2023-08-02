import mongoose from "mongoose";


const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  nit: {
    type: String,
    required: true,
  },
  
});

const Store = mongoose.model("Store", storeSchema);

export default Store;
