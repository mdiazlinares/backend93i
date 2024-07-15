const express = require("express");
// const usuarioModel = require("../model/usuario-model");
const { crearUsuario, loginUsuario } = require("../controllers/authControllers");
const routAuth = express.Router();

routAuth.get('/Saludo', (req,res)=>{
    res.send('Hello World');   
});
 
routAuth.post('/crearUsuario', crearUsuario);

routAuth.post('/login', loginUsuario);

routAuth.delete('/borrarUsuario', (req,res)=>{
    res.send('Usuario Borrado');   
});

routAuth.put('/modificarUsuario', (req,res)=>{
    res.send('Usuario Modificado');   
});

module.exports = routAuth;