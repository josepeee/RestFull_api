 const jwt = require("jsonwebtoken");

 const generarteToken = (payload, isRefresh) => {
    if(isRefresh){
        return jwt.sign(payload, process.env.TOKEN_SECRET_REFRESH, {
            expiresIn: "5 min",
        })
    }
    return jwt.sign(payload, proces.env.TOKEN_SECRET_REFRESH,{ expiresIn: "1min" });
 } ; 

 module.exports = {generarteToken}