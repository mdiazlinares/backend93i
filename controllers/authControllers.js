const usuarioModel = require("../model/usuario-model");
const bcrypt = require('bcrypt');

const crearUsuario = async (req,res)=>{
    try {
        //A traves del req.body recibimos lo enviado desde el "FRONT"
        const {name, edad, email, password} = req.body; 

        //Validaciones
        if(name === '' | edad === '' | email === '' | password === ''){
            res.status(400).json({
                msg: 'Todos los campos son obligatorios',
            });
        }

        //Analizamos si el email ingresado no está registrado
        let usuario = await usuarioModel.findOne({email});
        if(usuario){
            return res.status(400).json({
                mensaje: "EL usuario que se intenta ingresar ya existe"
            });
        }

        //En el caso de que no exista el email en la DB creamos una instancia.
        usuario = new usuarioModel(req.body);
        
        //Encriptación de password
        const salt = bcrypt.genSaltSync(10);
        //Para encriptar las password debe ser string
        let newPassword = password.toString();
        usuario.password = bcrypt.hashSync(newPassword, salt);

        //Guardarlo en la DB
        await usuario.save();

        res.status(201).json({
            msg: 'Usuario Creado',
        }); 
    } catch (error) {
        res.status(500).json({
            msg: 'Por favor contactarse con un administrador',
        }); 
    }      
}

const loginUsuario = async (req,res)=>{
    try {
        //A traves del req.body recibimos lo enviado desde el "FRONT"
        const {email, password} = req.body; 

        //Validaciones
        if(email === '' | password === ''){
            res.status(400).json({
                msg: 'Todos los campos son obligatorios',
            });
        }

        //Analizamos si el email ingresado no está registrado
        let usuario = await usuarioModel.findOne({email});
        if(!usuario){
            return res.status(400).json({
                mensaje: "El email es incorrecto"
            });
        }        
        
        //Validar la contraseña ingresada con la guardada en la BD
        let newPassword = password.toString();
        const validarPassword = bcrypt.compareSync(newPassword, usuario.password); // true
        if(!validarPassword){
            return res.status(400).json({
                mensaje: "La passowrd es incorrecta"
            });
        }      

        res.status(201).json({
            msg: 'Usuario Logueado',
        }); 

    } catch (error) {
        res.status(500).json({
            msg: 'Por favor contactarse con un administrador',
        });         
    } 
}

module.exports = {crearUsuario, loginUsuario};

