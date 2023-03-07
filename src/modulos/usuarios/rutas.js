const express = require('express');

const respuestas = require('../../red/Respuestas')
const controlador = require('./index')

const routes = express.Router();

routes.get('/', todos);
routes.get('/:id', uno);
routes.put('/', eliminar);
routes.post('/', agregar);

async function todos(req, res, next) {
  try {
    const items = await controlador.todos();
    respuestas.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
}

async function uno(req, res, next) {
  try {
    const items = await controlador.uno(req.params.id);
    respuestas.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
}

async function eliminar(req, res, next) {
  try {
    const items = await controlador.eliminar(req.body);
    respuestas.success(req, res, 'Item Eliminado satisfactoriamente', 200);
  } catch (error) {
    next(error);
  }
}

async function agregar(req, res, next) {
  try {
    const items = await controlador.agregar(req.body);
    if (req.body.id == 0) {
      mensaje = 'Item guardado con éxito';
    } else {
      mensaje = 'Item actualizado con éxito';
    }

    respuestas.success(req, res, mensaje, 201);
  } catch (error) {
    next(error);
  }
}


module.exports = routes;

