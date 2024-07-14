const express = require("express");
const usuarioModel = require("../model/usuario-model");
const routAuth = express.Router();

routAuth.get('/Saludo', (req,res)=>{
    res.send('Hello World');   
});
 
routAuth.post('/crearUsuario', async (req,res)=>{
    console.log(req.body);

    const {name, edad, email, password} = req.body; 

    //En el caso de que no exista el email en la DB creamos una instancia.
    const usuario = new usuarioModel(req.body);
    console.log(usuario);

    //Guardarlo en la DB
    await usuario.save();

    res.send('Usuario Creado');   
});

routAuth.delete('/borrarUsuario', (req,res)=>{
    res.send('Usuario Borrado');   
});

routAuth.put('/modificarUsuario', (req,res)=>{
    res.send('Usuario Modificado');   
});

module.exports = routAuth;