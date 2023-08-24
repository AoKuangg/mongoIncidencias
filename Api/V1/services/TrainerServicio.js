import { connDB } from "../config/connection.js";

export const getAllTrainer = async()=>{
    let db = await connDB();
    let collection = db.collection('trainer');
    let data = await collection.find().toArray();
    return data;
};

export const getTrainerByCedula = async(trainerCC)=>{
    let db = await connDB();
    let collection = db.collection('trainer');
    let data = await collection.find({cedula:trainerCC}).toArray();
    return data;
};

export const createTrainer = async(trainer)=>{
    let db = await connDB();
    let collection = db.collection('trainer');
    let data = await collection.insertOne(trainer);
    return data;
};