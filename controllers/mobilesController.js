
const Mobile = require("../models/mobilesModel");

let mobiles = [
    { id: 1, marca: "Apple", modelo: "Iphone 14" },
    { id: 2, marca: "Apple", modelo: "Iphone 13" },
    { id: 3, marca: "Samsung", modelo: "Galaxy S22" },
];
const createMobile = (req, res) => {
    try {
        const { marca, modelo, precio, colores } = req.body;
        const mobile = new Mobile({ marca, modelo, precio, colores });
        mobile.save();
        res.status(200).json({
            status: "success",
            data: mobile,
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "No se pudo crear el producto",
            error: error.message,
        })
    }
};



const getAllMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        console.log(mobiles);
        if (mobiles.length === 0) {
            return res.status(200).json({
                status: "success",
                message: "No hay datos",
            });
        }
        res.status(200).json({
            status: " success",
            data: mobiles,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "No se pudo crear el producto",
            error: error.message,
        })
    }
};

const getMobileById = async (req, res) => {
    try {
        const mobileId = req.params.id;
        const mobiles = await Mobile.findById(mobileId);
        if(!mobile) { 
            return res.status(200).json({
                status: "success",
                message: "No hay datos",
            });
        }
        console.log(mobiles);
        if (mobiles.length === 0) {
            return res.status(200).json({
                status: "success",
                message: "No hay datos",
            });
        }
        res.status(200).json({
            status: " success",
            data: mobiles,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "No se pudo obtener el producto",
            error: error.message,
        });
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "No se pudo crear el producto",
            error: error.message,
        })
    }
};

const patchMobile =  async (req, res) => {
    try{
        const mobileId = req.params.id;
        const {marca,modelo, precio,colores} = req.body;
        
        const mobile = await Mobile.findById(mobileId);

        if(marca) {
            mobile.marca = marca
        }
        if (modelo){
            mobile.modelo = modelo;
        }
        if (precio){
            mobile.precio = precio;
        }
        if (colores){
            mobile.colores= colores;
        }
        mobile.save();
        return res.status(200).json({
            status: "success",
            message: "No hay datos",
        });
    }
    
};

// const createMobile = (req, res) => {
//     const { marca, modelo } = req.body;
//     const index = mobiles.length + 1;
//     mobiles.push({ index, marca, modelo });
//     res.json(mobiles);
// };




// tengo que terminar de hacerlo 
const deleteMobile = (req, res) => {
    try{

    }
    const mobileId =req.params.id;
    const index = mobiles.findIndex((mobile) => mobile.id === mobileId);
    console.log(index);
    if (index === -1) {
        return res.json({ error: "No se encuentra ese Id" });
    }
    mobiles.splice(index, 1);
    return res.json(mobiles);
};


// difencia entre el pacth y el update
const patch2Mobile=  async (req, res) =>{
    try {
        const mobileId= req.params.id;
        const{marca,modelo,precio,colores} = req.body;
        const mobile = await Mobile.findByIdAndUpdate(
            mobileId,{
                $set:{
                    marca:marca,
                    modelo: modelo,
                    precio: precio,
                    colores: colores,
                },
            },
            {new: true}
        );
        res.status(200).json({status: "success",
                              data: mobile,
     });
    }catch (error) {
        res.status(400).json({
            status: "Error",
            message: "No se pudo crear el producto",
            error: error.message,
        })
    }

};



module.exports = {
    getAllMobiles,
    getMobileById,
    createMobile,
    patchMobile,
    deleteMobile,
    patch2Mobile,
};
