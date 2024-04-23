const swaggerJSDOC= require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Tienda moviles",
            version: "1.0.0",
            description: "Descripcion de la api",
        },
        server:{
            url: "http://localhost:3000",
            description: "Servidor local",
        }
    },
    apis:["./routers/*.js"],

};
const swaggerSpec = swaggerJSDOC(options);
module.exports = swaggerSpec;