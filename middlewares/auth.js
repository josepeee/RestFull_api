
const jwt = require("jsonwebtoken");

// Middleware para verificar el token de autenticación
const verifyToken = (req, res, next) => {

    // Obtiene el token del encabezado de autorización


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
const verifyRole = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access denied");
    try {
      const payload = jwt.verify(token, process.env.TOKEN_SECRET);
      if (!payload.role || payload.role === "user")
        return res.status(400).send("Acceso denegado");
      req.payload = payload;
      next();
    } catch (error) {
      res.status(400).send("Expired token");
    }
  };
  
  const verifyRole2 = (req, res, next) => {
    try {
      const payload = req.payload;
      if (!payload.role || payload.role === "user")
        return res.status(400).send("Acceso denegado");
      req.payload = payload;
      next();
    } catch (error) {
      res.status(400).send("Expired token");
    }
  };

module.exports = verifyToken;
