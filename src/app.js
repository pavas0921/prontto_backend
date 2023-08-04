import express from "express";
import { connect } from "./config/database.js";
import rolRoutes from "./routes/rol.routes.js";
import storeRoutes from "./routes/store.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
//app.use(cors());

//Middleware
app.use(express.json());
connect();

app.get("/", (req, res) => {
  res.json("funcion");
});

app.use("/rol", rolRoutes);
app.use("/user", userRoutes);
app.use("/store", storeRoutes);


export default app;
