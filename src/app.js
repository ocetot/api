// Importamos el módulo "express" para crear nuestra aplicación web
const express = require('express');

// Importamos el archivo "config.js" que contiene la configuración de nuestra aplicación
const config = require('./config');

// Creamos una instancia de nuestra aplicación web utilizando el módulo "express"
const app = express();

// Configuramos el puerto en el que se ejecutará nuestra aplicación utilizando el método "set" de "express"
// El valor del puerto lo obtenemos de la configuración que importamos del archivo "config.js"
app.set('port', config.app.port);

// Exportamos nuestra aplicación para que pueda ser utilizada desde otros archivos
module.exports = app;
