const express = require('express');

const respuestas = require('../../red/Respuestas')

const routes = express.Router();

routes.get('/', function(req, res){
    respuestas.success(req, res, 'Todos ok desde clientes', 200)
})

module.exports = routes;
