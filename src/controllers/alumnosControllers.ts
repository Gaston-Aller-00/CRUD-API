import { Request, Response } from "express";
import AlumnoModel, { Alumno } from "../models/AlumnoModel";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const alumnos = await AlumnoModel.find();
    res.json(alumnos);
  } catch (error) {
    console.error("Error obteniendo los alumnos", error);
    res.status(500).json({ error: "Error del server" });
  }
};

export const userById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const alumno: Alumno | null = await AlumnoModel.findById(id);
    if (!alumno) {
      res.status(400).json({ message: "User not found pebete" });
    }
    res.status(200).json(alumno);
  } catch (error) {
    console.error("Error to search Alumno by id", error);
    res.status(500).json({ message: "Error server" });
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, edad } = req.body;
    if (!nombre || !apellido || !edad) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const alumnoNuevo: Alumno = await AlumnoModel.create({
      nombre,
      apellido,
      edad,
    });

    res.status(201).json({ message: "Succesfully created alumno " });
  } catch (error) {
    console.error("Error creating User", error);
    res.status(500).json({ message: "Error server pete" });
  }
};

export const EditUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, edad } = req.body;
    if (!nombre || !apellido || !edad) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const usuarioActualizado: Alumno | null =
      await AlumnoModel.findByIdAndUpdate(
        id,
        { nombre, apellido, edad },
        { new: true }
      );
    if (!usuarioActualizado) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).json({ message: "Error server" });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuarioEliminado = await AlumnoModel.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error server", error);
    res.status(500).json({ message: "Error server" });
  }
};
