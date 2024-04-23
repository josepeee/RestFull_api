
const jwt = require("jsonwebtoken");

// Middleware para verificar el token de autenticación
const verifyToken = (req, res, next) => {

    // Obtiene el token del encabezado de autorización
    const token = req.header("auth-token");

    // Si no hay token, devuelve un error de acceso denegado
    if (!token) return res.status(400).send("Access Denied");
    try {
        // Verifica el token utilizando la clave secreta del token de autenticación
        const payload = jwt.verify(token, process.env.TOKEN_SECRET); // .......esta constante es payload

        // Si el token es válido, agrega el usuario verificado al objeto de solicitud y pasa al siguiente middleware
        req.payload = payload; // ..............req.payload = payload;
        next();
    } catch (error) {
        try {
            // Si la verificación del token de autenticación falla, intenta verificar con la clave secreta del token de actualización
            const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);// .....payload

            // Si el token de actualización es válido, agrega el usuario verificado al objeto de solicitud y pasa al siguiente middleware
            req.payload = payload;//...............rep.payload = payload
            next();

        } catch (error) {
            // Si ambos tokens son inválidos, devuelve un error de token expirado
            res.status(400).send("Expired Token");
        }
    }
}

const veryfyRol = (req, res, next)=>{
    try{
         const role = req.payload.role;
         if(role !== "admin"){
            return res.status(400).send("Acces denied: need admin permission"); 
         }
         next(); 
    }catch (error){
     return res.status(400).send("cannot read admin"); 
    }
    };

module.exports = verifyToken, veryfyRol ;
