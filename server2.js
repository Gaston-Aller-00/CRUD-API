const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Datos de ejemplo
let usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "María" },
];

// Middleware para permitir el uso de JSON
app.use(express.json());

// Obtener todos los usuarios
app.get("/usuarios", (req, res) => {
  console.log(`Todos los usuarios son: ${JSON.stringify(usuarios)}  `);
  res.json(usuarios);
});

// Obtener un usuario por ID
app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send("Usuario no encontrado");
  res.json(usuario);
});

// Agregar un nuevo usuario
app.post("/usuarios", (req, res) => {
  const usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

// Actualizar un usuario
app.put("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send("Usuario no encontrado");

  usuario.nombre = req.body.nombre;
  res.json(usuario);
});

// Eliminar un usuario
app.delete("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).send("Usuario no encontrado");

  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));
  res.json(usuario);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
