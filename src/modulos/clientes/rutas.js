const express = require('express');

const respuestas = require('../../red/Respuestas')
const controlador = require('./controlador')

const routes = express.Router();

routes.get('/', async function (req, res) {
    const items = await controlador.todos();
    respuestas.success(req, res, items, 200);
})

routes.get('/:id', async function (req, res) {
    try {
        const items = await controlador.uno(req.params.id);
        respuestas.success(req, res, items, 200);
    } catch (error) {
        respuestas.error(req, res, error.message, 500);
    }
});

module.exports = routes;

