
const Mobile = require("../models/mobilesModel");
const sendEmail = require("../services/emailService");
//se puede borrar..........

let mobiles = [
    { id: 1, marca: "Apple", modelo: "Iphone 14" },
    { id: 2, marca: "Apple", modelo: "Iphone 13" },
    { id: 3, marca: "Samsung", modelo: "Galaxy S22" },
];

// Función para crear un nuevo objeto de móvil
const createMobile = (req, res) => {
    try {
        // Extraer datos del cuerpo de la solicitud
        const { marca, modelo, precio, colores } = req.body;

        // Crear un nuevo objeto Mobile con los datos recibidos
        const mobile = new Mobile({ marca, modelo, precio, colores });

        // Guardar el objeto móvil en la base de datos
        mobile.save();

        // Enviar respuesta con estado 200 y el objeto móvil creado
        res.status(201).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "No se pudo crear el producto",
            error: error.message,
        });
    }
};
//obtener la media.. Colocar siempre por delante del id en el orden de las peticiones para que no de error..
const getAverage = (req, res) => {
    res.json({ media: 29 });
}

// Función asincrónica para obtener todos los móviles
const getAllMobiles = async (req, res) => {
    try {
        // Buscar todos los móviles en la base de datos
        const mobiles = await Mobile.find();

        // Imprimir en la consola los móviles encontrados (opcional)
        console.log(mobiles);

        // Verificar si no se encontraron móviles
        if (mobiles.length === 0) {
            // Enviar una respuesta con estado 200 indicando que no hay datos
            return res.status(200).json({
                status: "success",
                message: "No hay Moviles",
            });
        }
        //LLamo a la funcion senMail......
        await sendEmail(
            "joseantonioplaza7@gmail.com",
            "soy un email",
            "soy un ejemplo de email"
        );

        // Enviar una respuesta con estado 200 y los móviles encontrados
        res.status(200.).json({
            status: " success",
            data: mobiles,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "No se pudo obtener los móviles",
            error: error.message,
        });
    }
};

// Función asincrónica para obtener un móvil por su ID
const getMobileById = async (req, res) => {
    try {
        // Obtener el ID del móvil de los parámetros de la solicitud
        const mobileId = req.params.id;

        // Buscar el móvil en la base de datos por su ID
        const mobile = await Mobile.findById(mobileId);

        // Verificar si no se encontró ningún móvil con el ID proporcionado
        if (!mobile) {
            // Enviar una respuesta con estado 200 indicando que no se encontró ningún móvil
            return res.status(200).json({
                status: "success",
                message: "No hay móvil",
            });
        }

        // Imprimir en la consola el móvil encontrado (opcional)
        console.log(mobile);

        // Verificar si el móvil encontrado es un array vacío
        if (mobile.length === 0) {
            // Enviar una respuesta con estado 200 indicando que no hay datos
            return res.status(200).json({
                status: "success",
                message: "No hay datos",
            });
        }

        // Enviar una respuesta con estado 200 y el móvil encontrado
        res.status(200).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "No se pudo obtener el producto",
            error: error.message,
        });
    }
};

// Función asincrónica para actualizar parcialmente un móvil por su ID
const patchMobile = async (req, res) => {
    try {
        // Obtener el ID del móvil de los parámetros de la solicitud
        const mobileId = req.params.id;

        // Extraer los datos de marca, modelo, precio y colores del cuerpo de la solicitud
        const { marca, modelo, precio, colores } = req.body;

        // Buscar el móvil en la base de datos por su ID
        const mobile = await Mobile.findById(mobileId);

        // Actualizar los campos del móvil si se proporcionan en la solicitud
        if (marca) {
            mobile.marca = marca;
        }
        if (modelo) {
            mobile.modelo = modelo;
        }
        if (precio) {
            mobile.precio = precio;
        }
        if (colores) {
            mobile.colores = colores;
        }

        // Guardar los cambios realizados en el móvil
        mobile.save();

        // Enviar una respuesta con estado 200 indicando éxito
        res.status(200).json({
            status: "success",
            message: "Móvil actualizado correctamente",
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "No se pudo actualizar el producto",
            error: error.message,
        });
    }
};

// Función asincrónica para eliminar un móvil por su ID
const deleteMobile = async (req, res) => {
    try {
        // Obtener el ID del móvil de los parámetros de la solicitud
        const mobileId = req.params.id;

        // Buscar el móvil en la base de datos por su ID y eliminarlo
        const mobile = await Mobile.findByIdAndDelete(mobileId);

        // Verificar si no se encontró ningún móvil con el ID proporcionado
        if (!mobile) {
            // Enviar una respuesta con estado 200 indicando que no se encontró ningún móvil para eliminar
            return res.status(200).json({
                status: "success",
                message: "No se ha encontrado ningún móvil para eliminar",
            });
        }

        // Enviar una respuesta con estado 200 y los datos del móvil eliminado
        res.status(200).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "Error al borrar el móvil",
            error: error.message,
        });
    }
};

// difencia entre el pacth y el update

// Función asincrónica para actualizar parcialmente un móvil por su ID utilizando Mobile.findByIdAndUpdate
const patch2Mobile = async (req, res) => {
    try {
        // Obtener el ID del móvil de los parámetros de la solicitud
        const mobileId = req.params.id;

        // Extraer los datos de marca, modelo, precio y colores del cuerpo de la solicitud
        const { marca, modelo, precio, colores } = req.body;

        // Utilizar Mobile.findByIdAndUpdate para buscar y actualizar el móvil por su ID
        const mobile = await Mobile.findByIdAndUpdate(
            mobileId, // ID del móvil a actualizar
            {
                $set: { // Utilizar el operador $set para actualizar solo los campos proporcionados
                    marca: marca,
                    modelo: modelo,
                    precio: precio,
                    colores: colores,
                },
            },
            { new: true } // Opción new: true para devolver el móvil actualizado en lugar del original
        );

        // Enviar una respuesta con estado 200 y los datos del móvil actualizado
        res.status(200).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "No se pudo actualizar el producto",
            error: error.message,
        });
    }

    // En esta función, patch2Mobile, se utiliza Mobile.findByIdAndUpdate para buscar y actualizar un móvil por su ID. La diferencia principal entre patch y update radica en cómo se realiza la actualización:

    // patch suele usarse para actualizar parcialmente un recurso, es decir, actualizar solo los campos proporcionados en la solicitud. En este caso, se utiliza el operador $set para especificar qué campos se deben actualizar y sus nuevos valores. Esto permite modificar solo los campos que se proporcionan en la solicitud y mantener los demás sin cambios.

    // update, por otro lado, actualiza el documento completo con los valores proporcionados. Si solo se proporcionan ciertos campos, los demás se establecerán en null o se eliminarán según corresponda. Esto significa que si no se proporciona un campo, se eliminará del documento.

    // En resumen, patch es más adecuado cuando se desea actualizar parcialmente un documento, mientras que update se utiliza cuando se desea reemplazar completamente el documento con nuevos valores. La elección entre ellos depende de los requisitos específicos de la aplicación y del tipo de actualización que se esté realizando.

};

// Función asincrónica para eliminar un color de la lista de colores de un móvil por su ID
const removeColor = async (req, res) => {
    try {
        // Obtener el ID del móvil y el color a eliminar del cuerpo de la solicitud
        const mobileId = req.body.id;
        const colorToRemove = req.body.color;

        // Buscar el móvil en la base de datos por su ID
        const mobile = await Mobile.findById(mobileId);

        // Verificar si no se encontró ningún móvil con el ID proporcionado
        if (!mobile) {
            // Enviar una respuesta con estado 200 indicando que no se encontró el móvil
            return res.status(200).json({
                status: "success",
                message: "Producto no encontrado",
            });
        }

        // Filtrar la lista de colores del móvil para eliminar el color especificado
        mobile.colores = mobile.colores.filter((color) => color !== colorToRemove);

        // Guardar los cambios realizados en el móvil
        const newMobile = await mobile.save();

        // Enviar una respuesta con estado 200 indicando éxito y el móvil actualizado
        res.status(200).json({
            status: "success",
            message: "Color eliminado correctamente",
            newMobile,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "Error al borrar el móvil",
            error: error.message,
        });
    }
};
///// Prueba...     

const sendCheapest = async (req, res) => {
    try {
        const email = req.body.email;
        const mobile = await Mobile.findOne().sort({ precio: 1 });
        if (!mobile) {
            return res.status(200).json({
                status: "succes",
                message: "No hay movil",
            });
        }
        const html = `
        <h2> ¡Oferta especial</h2><br>
        <p>Este es el producto mas barato para ti:</p><br>
        <p>Este es el producto mas barato para ti:</p><br>
        <p>Marca:${mobile.marca}</p><br>
        <p>Modelo:${mobile.modelo}</p><br>
        <p>Precio:${mobile.price}</p><br>
        `;

        //LLamo a la funcion senMail......

        await sendEmail(email, "OFERTA!", html);

        res.status(200).json({
            status: "success",
            data: mobile,
        });
    } catch (error) {
        // Manejar errores si la operación falla
        res.status(400).json({
            status: "Error",
            message: "Error al borrar el móvil",
            error: error.message,
        });
    }

};






module.exports = {
    getAllMobiles,
    getMobileById,
    createMobile,
    patchMobile,
    deleteMobile,
    patch2Mobile,
    removeColor,
    getAverage,
    sendCheapest

};
