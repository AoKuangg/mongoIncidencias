import { connDB } from "../config/connection";

export const getAllUsers = async()=>{
    let db = await connDB();
    let collection = db.collection('usuario');
    let data = await collection.find().toArray();
    return data;
};

export const getUserByCC = async(UserCC)=>{
    let db = await connDB();
    let collection = db.collection('usuario');
    let data = await collection.find({cedula:UserCC}).toArray();
    return data;
};

export const createUser = async(usuario)=>{
    let db = await connDB();
    let collection = db.collection('usuario');
    let data = await collection.insertOne(usuario);
    return data;
};