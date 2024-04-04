import { Request, Response } from "express";

export interface User {
  id: number;
  nroDocumentro: number;
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: string;
}

export let users: User[] = [
  {
    id: 1,
    nroDocumentro: 30415654,
    nombre: "German",
    apellido: "Zotella",
    email: "gzotella@gmail.com",
    fechaNacimiento: "1998-08-06",
  },
  {
    id: 2,
    nroDocumentro: 12345678,
    nombre: "Ana",
    apellido: "García",
    email: "ana.garcia@example.com",
    fechaNacimiento: "1990-05-15",
  },
  {
    id: 3,
    nroDocumentro: 98765432,
    nombre: "Juan",
    apellido: "Martínez",
    email: "juan.martinez@example.com",
    fechaNacimiento: "1985-11-20",
  },
  {
    id: 4,
    nroDocumentro: 56789123,
    nombre: "María",
    apellido: "López",
    email: "maria.lopez@example.com",
    fechaNacimiento: "1995-03-25",
  },
  {
    id: 5,
    nroDocumentro: 87654321,
    nombre: "Luis",
    apellido: "Fernández",
    email: "luis.fernandez@example.com",
    fechaNacimiento: "1982-09-12",
  },
  {
    id: 6,
    nroDocumentro: 34567891,
    nombre: "Sofía",
    apellido: "Díaz",
    email: "sofia.diaz@example.com",
    fechaNacimiento: "1989-07-03",
  },
  {
    id: 7,
    nroDocumentro: 65432189,
    nombre: "Pedro",
    apellido: "Gómez",
    email: "pedro.gomez@example.com",
    fechaNacimiento: "1978-12-18",
  },
  {
    id: 8,
    nroDocumentro: 45678912,
    nombre: "Elena",
    apellido: "Rodríguez",
    email: "elena.rodriguez@example.com",
    fechaNacimiento: "1993-04-08",
  },
  {
    id: 9,
    nroDocumentro: 23456789,
    nombre: "Carlos",
    apellido: "Pérez",
    email: "carlos.perez@example.com",
    fechaNacimiento: "1987-10-30",
  },
  {
    id: 10,
    nroDocumentro: 78912345,
    nombre: "Laura",
    apellido: "Sánchez",
    email: "laura.sanchez@example.com",
    fechaNacimiento: "1984-06-22",
  },
];

export const getUsers = (req: Request, res: Response) => {
  res.send(users);
};

export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(400).send("User not found ");
  }
};

export const createUser = (req: Request, res: Response) => {
  const newUser: User = req.body;
  if (
    !newUser.id ||
    !newUser.nroDocumentro ||
    !newUser.nombre ||
    !newUser.apellido ||
    !newUser.email ||
    !newUser.fechaNacimiento
  ) {
    return res.status(400).send("Todos los campos son obligatorios");
  }

  users.push(newUser);
  res.status(201).send("Usuario creado correctamente");
};

export const updateUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedUser: User = req.body;
  const userToUpdate = users.find((u) => u.id === id);

  if (userToUpdate) {
    Object.assign(userToUpdate, updatedUser);
    res.send("Usuario actualizado correctamente");
  } else {
    res.status(404).send("Usuario no encontrado");
  }
};


export const deleteUser = (  req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        users = users.filter((u)=> u.id !== id);
        res.json({ message: "Usuario eliminado correctamente" });
}