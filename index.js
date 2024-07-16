//Forma de importar en NODE
const express = require('express');
// var cors = require('cors');
const dbConection = require('./database/config');
require('dotenv').config();

const app = express();
// app.use(cors());

app.use(express.json());

app.use("/auth", require("./router/authrouter"));

dbConection();

app.listen(process.env.PORTLOCAL, () => { 
    console.log(`Example app listening on port ${process.env.PORTLOCAL}`);
});

