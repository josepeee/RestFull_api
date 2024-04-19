 const router = require("express").Router();
 const { Router } = require("express");
 const {
   getAllMobiles,  // Escuchar peticiones get 
   getMobileById, // obtener documentos por el id
   createMobile,  // Añadir documentos
   patchMobile,   // Actualizar documentos
   deleteMobile,  // Borrar documentos
   patch2Mobile,
   removeColor,
   getAverage, // obtener media..
 } = require("../controllers/mobilesController");
const veryfytoken = require("../middlewares/auth");
 
 //El orden de las peticiones deben de ser de las mas complejas a las mas faciles las ultimas las de id; 
 //Escuchar peticiones GET
 router.get("/", getAllMobiles , veryfytoken);

// Obtener media 
router.get("/average", getAverage)

 //Obtener documentos por ID
 router.get("/:id", getMobileById);

 //Añadir documentos
 router.post("/", createMobile);

 //Actualizar un documento
router.patch("/:id", patchMobile);

//Actualizar un documento ("average media")
 router.patch("/:patch/: id", patch2Mobile);

 //Actualizar un color
 router.patch("/removeColor/:id",removeColor);
 
 //Borrar un documento
 router.delete("/:id", deleteMobile);
 
 module.exports = router;
