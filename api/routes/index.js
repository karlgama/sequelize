const express = require('express')
const PessoaController = require("../controllers/PessoaController.js")

module.exports = app =>{
    app.use(express.json());
    app.get("/",(req,res)=>{
        res.send("teste")
    })
}