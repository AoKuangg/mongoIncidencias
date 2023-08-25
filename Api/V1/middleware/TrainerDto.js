import Joi from "joi";

export const Trainerschema = Joi.object({
    cedula: Joi.string().alphanum().length(10).required(),
    nombre: Joi.string().required(),
    telefono: Joi.string().alphanum().length(10).required(),
    emailPersonal: Joi.string().required().email(),
    emailCorp: Joi.string().required().email(),
});

export const Userschema = Joi.object({
    cedula: Joi.string().alphanum().length(10).required(),
    nombre: Joi.string().required(),
    rol: Joi.string().required()
});