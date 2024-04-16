
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
        min:[0,"El precio no puede ser menos que 0"],
    },
    colores:{
        type:[String],
        enum:["Rojo", "verde", "Azul", "Blanco", "Negro"],
        default:["Rojo", "verde", "Azul", "Blanco", "Negro"],
    },
});

const Mobile = mongoose.model("Mobiles",mobileSchema,);

module.exports = Mobile;