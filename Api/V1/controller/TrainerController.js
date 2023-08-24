import * as TrainerConsulta from "../services/TrainerServicio.js";

export const getAllTrainers = async (req, res) =>{
    try {
        let data = await TrainerConsulta.getAllTrainer();
        res.status(200).send({status: 200, message: "data obtenida",data});
    } catch (error) {
        res.status(500).send({status:500,message: "Error al obtener data", error: error.message});
    }
};

export const  getTrainerByCedula = async (req, res) =>{
    try {
        let data = await TrainerConsulta.getTrainerByCedula(req.params.trainerCC);
        res.status(200).send({status: 200, message: "data obtenida",data});
    } catch (error) {
        res.status(500).send({status:500, message: "Error al obtener data",error: error.message});
    }
};

export const createTrainer = async (req,res) =>{
  try {
    let data = await TrainerConsulta.createTrainer(req.body);
    res.status(200).send({status: 200, message: "data guardada",data});
  } catch (error) {
    res.status(500).send({status:500,message: "Error al guardar la data", error: error.message});
  }  
};