 const crypto = require("crypto");

 const secret = "codespace full stack 14 dos";
 
const hash = crypto.createHmac("sha256", secret)
.update("soy otro campo secreto")
.digest("hex");

console.log(hash);