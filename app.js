//npm init -y Sirve para crear los package
//npm i express Sirve para instalar los node_modules
//Servidor en Node.js y 

//Definiciones
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Configuracion 
//Busque en la carpeta public el index.html
app.use( express.static('public') );

/*app.get('/',(req,res)=>{
    res.send("En teoria el index.html");
})*/

app.get('*',(req,res)=>{
    res.send("En teoria 404.html");
})
//Corriendo el proceso del servidor
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: ",port);
})