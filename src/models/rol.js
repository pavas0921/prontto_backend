import mongoose from "mongoose";

const rolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  rights: [
    {
      type: String,
      required: true,
    },
  ],
});

const Rol = mongoose.model("Rol", rolSchema);

export default Rol;
