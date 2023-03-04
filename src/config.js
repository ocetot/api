// Exportamos un objeto que contiene la configuración de nuestra aplicación
module.exports = {
    // Dentro del objeto, definimos una propiedad llamada "app"
    app:{
        // La propiedad "port" indica el número de puerto en el que se ejecutará nuestra aplicación
        // Utilizamos process.env.PORT para obtener el valor de una variable de entorno llamada "PORT", 
        // si no está definida, utilizamos el valor 4000 por defecto.
        port: process.env.PORT || 4000,
    }
}
