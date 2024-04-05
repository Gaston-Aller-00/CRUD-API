import express from "express"
import {getHome,getAllUsers,userById,postUser,EditUserById,deleteUserById} from "../controllers/alumnosControllers"


const routerCrud = express.Router()

routerCrud.get("/",getHome)
routerCrud.get("/alumnos",getAllUsers)
routerCrud.get("/alumnos/:id",userById)
routerCrud.post("/alumnos",postUser)
routerCrud.put("/alumnos/:id",EditUserById)
routerCrud.delete("/alumnos/:id",deleteUserById)


export default routerCrud