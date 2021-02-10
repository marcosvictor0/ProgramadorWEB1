//Rotas Dinâmicas 

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bem Vindo á minha aplicação Web !.");
})

app.get("/ola", function(req, res) {
    res.send("Olá.");
})

app.get("/sair", function(req, res) {
    res.send("Sair.");
})

app.listen(3000, function() {
    console.log("Servidor rodando na url: https://localhost:3000");
})