const mongoose = require('mongoose');

const dbConection = async() => {
    try{
        await mongoose.connect(process.env.DB_CNN);
        console.log("Conexion Exitosa");
    }   catch(error){
            console.log(error);
    }
};

module.exports = dbConection;