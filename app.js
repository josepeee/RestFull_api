// Importación de los módulos necesarios
const express = require("express");
const mongoose = require("mongoose"); //importacion de la libreria mongoose
const mobilesRouter = require("./routers/mobilesRouters"); // Importar el enrutador de móviles
const userRouter = require("./routers/userRouter"); // Importar el enrutador de usuarios
const PORT = 3000; // Puerto en el que se ejecutará el servidor
require("dotenv").config(); // Cargar variables de entorno desde un archivo .env

// Creación de la aplicación Express
const app = express();

// Middleware para permitir el uso de JSON en las solicitudes
app.use(express.json());

// URL de la base de datos MongoDB obtenida desde las variables de entorno
const urlMongoose = process.env.DATABASE_URL_DEV;

// Conexión a la base de datos MongoDB
mongoose.connect(urlMongoose);

// Eventos de conexión de la base de datos
const db = mongoose.connection;

db.on("error", (error) => {
    console.error("Error al conectar:", error); // Manejo de errores de conexión
});

db.once("connected", () => {
    console.log("Success conect"); // Mensaje de éxito cuando la conexión se establece
});

db.on("disconected", () => {
    console.log("mongoose default connection is disconnected"); // Mensaje cuando la conexión se desconecta
});

// Rutas para los recursos de móviles y usuarios
app.use("/mobiles", mobilesRouter); // Rutas relacionadas con los móviles
app.use("/user", userRouter); // Rutas relacionadas con los usuarios

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`); // Mensaje indicando que el servidor está corriendo
});


// constraseña: 5wswpTUkuTQB3kZH


// const app = express();
// app.get('/hola/:nombre', (req, res) => {
//     const nombre = req.params.nombre;
//     res.setHeader("Content-type", "text/html; chartset=utf-8");
//     res.end(`<h2> hola mundo ${nombre}</h2>`);
// })

