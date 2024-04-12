const express = require("express");
const PORT = 3000;

const app = express();
app.get('/hola/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.setHeader("Content-type", "text/html; chartset=utf-8");
    res.end(`<h2> hola mundo ${nombre}</h2>`);
})
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);

});