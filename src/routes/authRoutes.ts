import express from "express"
import {loginUser,registerUser} from "../controllers/authControllers"


const routerAuth = express.Router() 


routerAuth.post("/login",loginUser)
routerAuth.post("/register",registerUser)


export default routerAuth 