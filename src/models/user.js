import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  idRol: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rol",
  },
  idStore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
