import * as IncidenciaConsulta from "../services/IncidenciaServicio.js";

export const  getAllIncidencia = async (req, res) => {
    try {
        let data = await IncidenciaConsulta.getAllIncidencia();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  getIncidenciaById = async (req, res) => {
    try {
        let data = await IncidenciaConsulta.getIncidenciaById(req.params.id);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  createIncidencia = async (req, res) => {
    try {
        let data = await IncidenciaConsulta.createIncidencia(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};