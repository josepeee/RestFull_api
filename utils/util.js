// Importa la biblioteca 'jsonwebtoken' que se utiliza para generar tokens JWT
const jwt = require("jsonwebtoken");

// Función para generar un token JWT
const generarteToken = (payload, isRefresh) => {
    // Comprueba si se está generando un token de actualización (refresh token)
    if(isRefresh) {
        // Genera un token con el payload proporcionado y la clave secreta para tokens de actualización
        return jwt.sign(payload, process.env.TOKEN_REFRESH, {
            expiresIn: "5 min", // Define que el token expirará en 5 minutos
        });
    }
    // Si no es un token de actualización, genera un token normal con la clave secreta para tokens normales
    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "3min", // Define que el token expirará en 1 minuto
    });
};

// Exporta la función generarteToken para que pueda ser utilizada por otros archivos
module.exports = { generarteToken };
