import express from "express"
import {getAllUsers,userById,postUser,EditUserById,deleteUserById} from "../controllers/alumnosControllers"


const router = express.Router()

router.get("/alumnos",getAllUsers)
router.get("/alumnos/:id",userById)
router.post("/alumnos",postUser)
router.put("/alumnos/:id",EditUserById)
router.delete("/alumnos/:id",deleteUserById)


export default router