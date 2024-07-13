//Forma de importar en NODE
const express = require('express');

const app = express();

app.get('/Saludo', (req,res)=>{
    res.send('Hello World');   
});
 
app.post('/crearUsuario', (req,res)=>{
    res.send('Usuario Creado');   
});

app.delete('/borrarUsuario', (req,res)=>{
    res.send('Usuario Borrado');   
});

app.put('/modificarUsuario', (req,res)=>{
    res.send('Usuario Modificado');   
});

app.listen(4000, () => { 
    console.log('Example app listening on port 6600!');
});

