import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  users,
  User,
} from "./controllers/user.controller";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Hola");
});
app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}...`);
});
