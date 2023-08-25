import { Router } from "express";
import * as UserC from "../controller/UsuarioController.js";

const UserApp = Router();

UserApp
    .get("/", UserC.getAllUsers)
    .get("/:UserCC", UserC.getUserByCC)
    .post("/", UserC.createUser)

export default UserApp;