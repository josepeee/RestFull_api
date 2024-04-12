const express = require("express");
const mongoose=require("mongoose")
const mobilesRouter = require("./routers/mobilesRouters")
const PORT = 3000;
const app = express()
app.use(express.json());

require("dotenv").config();


// const app = express();
// app.get('/hola/:nombre', (req, res) => {
//     const nombre = req.params.nombre;
//     res.setHeader("Content-type", "text/html; chartset=utf-8");
//     res.end(`<h2> hola mundo ${nombre}</h2>`);
// })

const urlMongoose = process.env.DATABASE_URL_DEV;

mongoose.connect(urlMongoose);

const db = mongoose.connection;

db.on("error", (error)=>{
    console.error("Error al conectar");
})

db.once("connected", () =>{
    console.log("Sucess conect");
})

db.on("disconected", () =>{
    console.log("mongoose default connection is disconnected")
})

app.use("/mobiles", mobilesRouter)


app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);

});

// constraseña: 5wswpTUkuTQB3kZH