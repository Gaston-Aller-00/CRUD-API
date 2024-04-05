import mongoose, { Schema } from "mongoose";

export interface Alumno extends mongoose.Document {
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

export default AlumnoModel;

