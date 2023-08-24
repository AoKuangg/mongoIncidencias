import { Router } from "express";
import * as TrainerC from "../controller/TrainerController.js"

const TrainersApp = Router();

TrainersApp
    .get("/", TrainerC.getAllTrainers)
    .get('/:trainerCC', TrainerC.getTrainerByCedula)
    .post("/", TrainerC.createTrainer)  



export default TrainersApp;