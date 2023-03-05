const express = require('express');
const morgan = require('morgan')
const config = require('./config');

const clientes = require('./modulos/clientes/rutas');

const app = express();

//Miaddlawere
app.use(morgan('dev'));

app.set('port', config.app.port);

// rutas
app.use('/api/clientes', clientes);

module.exports = app;
