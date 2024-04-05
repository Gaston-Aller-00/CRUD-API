import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
import routerCrud from "./routes/alumnoRoutes";
import routerAuth from "./routes/authroutes";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

async function connect() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

connect();
//home
app.use("/auth",routerAuth);

app.use("/", routerCrud);
// app.use("/", routerAuth);

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}...`);
});
