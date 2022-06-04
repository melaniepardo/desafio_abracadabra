const express = require("express");
const fs = require ("fs")

const app = express();

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use(express.static("assets"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const {
        usuarios
    } = JSON.parse(fs.readFileSync("usuarios.json"))
    const usuario = req.params.usuario
    if (usuarios.some(u => u == usuario)) {
        console.log(`${usuario} pertenece a los usuarios`)
        next()
    } else {
        // res.sendFile(__dirname + "/assets/who.jpeg")
    //    console.log(`Recuerda registrar tu nombre y  que la primera letra es con mayuscula, porque su ${usuario} no se encuentra registrado`)
        res.redirect("/who.jpeg")
    }
})


app.get("/abracadabra/juego/:usuario", (req, res) => {
res.send("ok")
})

//punto 5
app.get("/abracadabra/conejo/:n", (req, res) => {// permite que lo que envies por el navegador se pueda agregar al param un parametro número
    const numeroAzar = Math.floor(Math.random() * (5 - 1)) + 1;//numero maximo excluido menos el minimo incluido
    //  Utilizar la propiedad “params” del objeto request para guardar en una constante el parámetro “numero”.
    const numeroSeleccionado = req.params.n;
    console.log(numeroSeleccionado)
    console.log(numeroAzar)
    // Paso 3
    numeroSeleccionado == numeroAzar
        ? res.redirect("/conejito.jpg")
        : res.redirect("/voldemort.jpg")
});

app.get("*", (req, res) => {
    // Paso 2
    res.send("<center><h1>Esta página no existe... :/ </h1> </center>");
});