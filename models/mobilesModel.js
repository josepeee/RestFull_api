
const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    marca: {
        type: String,
        requiere: true,
    },
    modelo: {
        type: String, 
        require: true,
    },
    precio: {
        type: Number,
        require: true,
        min:[0,"El precio no puede ser menos que 0"], //el valor minimo requerido; 
    },
    colores:{
        type:[String], // Esto es una array de string..
        enum:["Rojo", "verde", "Azul", "Blanco", "Negro"], // Con esto estamos diciendo que deben de ser de este tipo que queremos insertat
        default:["Rojo", "verde", "Azul", "Blanco", "Negro"], // Por defecto cada vez que se guarde un movil, nos va a guardar todo estos colores de golpe..
    },
});

const Mobile = mongoose.model("Mobiles",mobileSchema,);

module.exports = Mobile;