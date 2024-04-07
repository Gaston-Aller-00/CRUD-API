import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
import routerCrud from "./routes/alumnoRoutes";
import routerAuth from "./routes/authRoutes";
import { connect } from "./db/db";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
//call F to connect DB
connect();
//home
app.use("/auth", routerAuth);
app.use("/", routerCrud);

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}...`);
});
