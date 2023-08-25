import { connDB } from "../config/connection";

export const getAllIncidencia = async ()=>{
    let db = await connDB();
    let collection = db.collection('incidencia');
    let data = await collection.find().toArray();
    return data;
};

export const getIncidenciaById = async (incidenciaId)=>{
    let db = await connDB();
    let collection = db.collection('incidencia');
    let data = await collection.find({id:incidenciaId}).toArray();
    return data;
};

export const createIncidencia = async (incidencia)=>{
    let db = await connDB();
    let collection = db.collection('incidencia');
    let data = await collection.insertOne(incidencia);
    return data;
};