import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";

dotenv.config();
interface Alumno extends Document {
  nombre: string;
  apellido: string;
  edad: number;
}

const AlumnoSchema = new Schema<Alumno>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
});

const AlumnoModel = mongoose.model<Alumno>("Alumno", AlumnoSchema);

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const DB_URL =
  "mongodb+srv://gastonallerdev:PD23c8pRWzWWhD0k@alumnoscluster.zyd65vi.mongodb.net/?retryWrites=true&w=majority&appName=AlumnosCluster";

app.post("/alumnos", async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, edad } = req.body;
    if (!nombre || !apellido || !edad) {
      return res
        .status(400)
        .json({ error: "Se requieren nombre, apellido y edad" });
    }

    const alumno = await AlumnoModel.create({ nombre, apellido, edad });
    res.status(201).json(alumno);
  } catch (error) {
    console.error("Error creando alumno:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
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
app.get("/", (req: Request, res: Response) => {
  res.send("Hello home!");
});
//get users
app.get("/alumnos", async (req: Request, res: Response) => {
  const alumnos = await AlumnoModel.find();
  res.json(alumnos);
});

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}...`);
});
