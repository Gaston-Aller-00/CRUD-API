import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
import router from "./routes/alumnoRoutes";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// app.post("/alumnos", async (req: Request, res: Response) => {
//   try {
//     const { nombre, apellido, edad } = req.body;
//     if (!nombre || !apellido || !edad) {
//       return res
//         .status(400)
//         .json({ message: "Se requieren todos los datos del alumno" });
//     }
//     const alumno = await AlumnoModel.create({ nombre, apellido, edad });
//     res.status(201).json(alumno);
//   } catch (error) {
//     console.error("Error creando el alumno", error);
//     res.status(500).json({ error: "Error interno del servidor" });
//   }
// });

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
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}...`);
});
