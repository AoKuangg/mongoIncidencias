import { Router } from "express";
import * as IncidenciasC from "../controller/IncidenciaController.js"

const IncideciaApp = Router();

IncideciaApp
    .get("/", IncidenciasC.getAllIncidencia)
    .get("/:incidenciaId", IncidenciasC.getIncidenciaById)
    .post("/", IncidenciasC.createIncidencia)


export default IncideciaApp;