const express = require('express');

const respuestas = require('../../red/Respuestas')
const controlador = require('./controlador')

const routes = express.Router();

routes.get('/', function (req, res) {
    const todos = controlador.todos();
    respuestas.success(req, res, todos, 200)
})

module.exports = routes;
