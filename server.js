const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());

let usuarios = [
  { id: 1, nombre: "Gaston", apellido: "Aller" },
  { id: 2, nombre: "Tomas", apellido: "Marquez" },
  { id: 3, nombre: "Flor", apellido: "Ali" },
  { id: 4, nombre: "Pepe", apellido: "Alogber" },
  { id: 5, nombre: "Julian", apellido: "Apataca" },
];

app.get("/usuarios", (req, res) => {
  console.log(`Todos los usuarios son: ${JSON.stringify(usuarios)}`);
  res.send(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === userId);

  if (!usuario) {
    res.status(400).json({ message: "The user was not found" });
  }
  console.log(`El usurio es ${JSON.stringify(usuario)}`);
  res.send(usuario);
});

app.post("/usuarios", (req, res) => {
  if (!nombre || !apellido) {
    res
      .send(401)
      .json({ message: "El nombre y apellido del usuario son obligarios" });
  }

  const user = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };

  usuarios.push(user);
  console.log("El usuario fue creado con exito");
  res.send(200).json({ message: "El usuario fue creado con exito" });
});

app.put("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(400).json({ message: "The user was not found" });

  usuario.nombre = req.body.nombre;
  usuario.apellido = req.body.apellido;

  res.json(usuario);
});

app.delete("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ message: "The user was not found" });

  const usuariosFiltrados = usuarios.filter(
    (u) => u.id !== parseInt(req.params.id)
  );
  res.json({
    message: "El usuario fue eliminado con éxito",
    deletedUser: usuario,
  });
});

app.listen(PORT, () => {
  console.log(`Server running in the port ${PORT}....`);
});
