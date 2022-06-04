const express = require("express");
// Paso 2
const app = express();
//Paso 3
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

// Paso 1
app.get("/estudiar", function (req, res) {
    // Paso 2
    res.redirect("http://localhost:3000/a/abracadabra/juego/:usuario");
});
