 const router = require("express").Router()

//  router.get('/idMobile', (req, res) => {
//     const nombre = req.params.idMobile
//     res.setHeader("Content-type", "text/html; chartset=utf-8");
//     res.end(`<h2> hola mundo ${nombre}</h2>`);
// });


module.exports = router;

let mobiles= 
[{ id:1,marca:"Appel", modelo: "Iphone14"},
  {id:2, marca:"Appel", modelo: "Iphone14"},
  {id:3, marca:"Samsung", modelo: "Galaxy s22"} 
];



//Escuchar peticiones GET
router.get('/',(req,res) => {
    res.json(mobiles);
});

//Obtener documentos por ID
router.get('/:id', (req,res) => {
    const mobileId =parseInt(req.params.id);
    const mobile = mobiles.find((mobiles) => mobiles.id === mobileId);
    res.json(mobile)
})

//Añadir documentos
router.post('/',(req,res) => {
    res.send(`POST documents id `);
})

//Actualizar un documento
router.patch('/:id',(req,res) => {
    res.send(`PATCH documents id ${req.params.id}`);
})

//Borrar un documento
router.delete('/:id',(req,res) => {
const mobileId = parseInt(req.params.id);
const index = mobiles.findIndex((mobile) => mobile.id === mobileId);
console.log(index);
if (index === -1){
    return res.json({error: "no se encuentra"});

}
mobiles.splice(index, 1);
return res.json(mobiles);
    res.send(`DELETE documents id ${req.params.id}`);
})