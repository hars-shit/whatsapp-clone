import express  from "express";
import { addUser } from "../controllers/userController.js";

const route=express.Router();

route.post('/add',addUser)


export default route
