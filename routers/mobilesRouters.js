 const router = require("express").Router();
 const {
   getAllMobiles,
   getMobileById,
   createMobile,
   patchMobile,
   deleteMobile,
 } = require("../controllers/mobilesController");
 
 //Escuchar peticiones GET
 router.get("/", getAllMobiles);
 //Obtener documentos por ID
 router.get("/:id", getMobileById);
 //Añadir documentos
 router.post("/", createMobile);
 //Actualizar un documento
 router.patch("/:id", patchMobile);
 //Borrar un documento
 router.delete("/:id", deleteMobile);
 
 module.exports = router;
