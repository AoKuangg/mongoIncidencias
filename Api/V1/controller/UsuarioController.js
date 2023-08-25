import * as UsuarioConsulta from "../services/UsuarioServicio.js"


export const getAllUsers = async (req, res) =>{
    try {
        let data = await UsuarioConsulta.getAllUsers();
        res.status(200).send({status: 200, message: "data obtenida",data});
    } catch (error) {
        res.status(500).send({status:500,message: "Error al obtener data", error: error.message});
    }
};

export const  getUserByCC = async (req, res) =>{
    try {
        let data = await UsuarioConsulta.getUserByCC(req.params.trainerCC);
        res.status(200).send({status: 200, message: "data obtenida",data});
    } catch (error) {
        res.status(500).send({status:500, message: "Error al obtener data",error: error.message});
    }
};

export const createUser = async (req,res) =>{
  try {
    let data = await UsuarioConsulta.createUser(req.body);
    res.status(200).send({status: 200, message: "data guardada",data});
  } catch (error) {
    res.status(500).send({status:500,message: "Error al guardar la data", error: error.message});
  }  
};