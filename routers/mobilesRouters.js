 const router = require("express").Router()

//  router.get('/idMobile', (req, res) => {
//     const nombre = req.params.idMobile
//     res.setHeader("Content-type", "text/html; chartset=utf-8");
//     res.end(`<h2> hola mundo ${nombre}</h2>`);
// });


let mobiles= 
[{ id:1, marca:"Apple", modelo: "Iphone14"},
  {id:2, marca:"Apple", modelo: "Iphone14"},
  {id:3, marca:"Samsung", modelo: "Galaxy s22"},
];

// let compuerter = [
//     {id:1, marca: "msi",modelo:"tiet"},
//     {id:2, marca: "samsung",modelo:"mascota"},
//     {id:3, marca: "hp",modelo:"empei"},
// ];

//Escuchar peticiones GET
router.get('/',(req,res) => {
    res.json(mobiles);
});


//Obtener documentos por ID
router.get('/:id', (req, res) => {
    const mobileId =parseInt(req.params.id);
    const mobile = mobiles.find((mobiles) => mobiles.id === mobileId);
    res.json(mobile)
})

//Añadir documentos
router.post('/',(req,res) => {
    const {marca, modelo} =req.body;
    const index = mobiles.length +1;
    mobiles.push({index,marca,modelo});
    res.json(mobiles);
});

//Actualizar un documento
router.patch("/:id",(req,res) => {
    const mobileId = parseInt(req.params.id); 
    const{marca, modelo} = req.body;
    const index = mobiles.findIndex((mobile) => mobile.id ===mobileId);
    if (index === -1) {
        return res.json({error: "No se encuenbtra ese id"});
    }
    mobiles[index].marca = marca;
    mobiles[index].modelo = modelo;
    res.json(mobiles[index]);
});

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

module.exports = router;
