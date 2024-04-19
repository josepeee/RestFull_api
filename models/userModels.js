
const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
 
// ^: Indica el inicio de la cadena.
// \S+: Coincide con uno o más caracteres que no sean un espacio en blanco. En este caso, antes del símbolo @ busca al menos un carácter que no sea un espacio en blanco.
// @: Busca el carácter "@".
// \S+: Similar al primero, busca uno o más caracteres que no sean un espacio en blanco después del símbolo @.
// \.: Busca un punto literal (.). Se usa \ antes del punto porque el punto en una expresión regular coincide con cualquier carácter, pero \. lo convierte en un punto literal.
// \S+: Busca uno o más caracteres que no sean un espacio en blanco después del punto.
// $: Indica el final de la cadena.
 
const User = mongoose.model("Users", userSchema);
 
module.exports = User;