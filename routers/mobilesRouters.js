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

/**
 * @swagger
 *  /mobiles:
 *    get:
 *        summary: Obtiene todos los moviles
 *        description: Obtiene la collection completa de moviles
 *        responses:
 *          200:
 *            description: Obtiene los moviles correctametne
 *          204:
 *            description: Respuesta correcta pero no hay datos
 *          400:
 *            description: Ha fallado la petición de obtener moviles
 *
 */


//El orden de las peticiones deben de ser de las mas complejas a las mas faciles las ultimas las de id; 
//Escuchar peticiones GET
router.get("/", getAllMobiles, veryfytoken);

/**
 * @swagger
 *  /mobiles/{id}:
 *    get:
 *        summary: Obtiene todos los moviles
 *        description: Obtiene la collection completa de moviles
 *        parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Id del producto
 *            schema:
 *              type: string
 *        responses:
 *          200:
 *            description: Obtiene los moviles correctametne
 *          204:
 *            description: Respuesta correcta pero no hay datos
 *          400:
 *            description: Ha fallado la petición de obtener moviles
 *
 */

// Obtener media 

router.get("/average", getAverage)

//Obtener documentos por ID
router.get("/:id", getMobileById);
/**
 * @swagger
 *  /mobiles:
 *    post:
 *        summary: Crear un nuevo movil
 *        description: Añadimos un movil a la coleccion
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  marca:
 *                    type: string
 *                    description: La marca del movil
 *                    default: "Apple"
 *                  modelo:
 *                    type: string
 *                    description: El modelo del movil
 *                    default: "Iphone X"
 *                  precio:
 *                    type: number
 *                    description: Precio del movil
 *                    default: 2000
 *                  colores:
 *                    type: [string]
 *                    description: Listado de colores
 *                    default: ["Rojo","Verde"]
 *        responses:
 *          201:
 *            description: Se ha creado correctamente el movil
 *          400:
 *            description: Ha fallado la petición de crear movil
 *
 */


//Añadir documentos
router.post("/", createMobile);


//Actualizar un documento
router.patch("/:id", patchMobile);

//Actualizar un documento ("average media")
router.patch("/:patch/: id", patch2Mobile);

//Actualizar un color
router.patch("/removeColor/:id", removeColor);

//Borrar un documento
router.delete("/:id", deleteMobile);

router.get("/sendCheapest");

module.exports = router;


