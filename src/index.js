// Importamos el módulo "app" que contiene nuestra aplicación
const app = require ('./app');

// Utilizamos el método "listen" del objeto "app" para indicar que nuestra aplicación debe escuchar en un determinado puerto.
// El número de puerto lo obtenemos utilizando el método "get" del objeto "app", que a su vez recupera el valor que definimos en nuestra configuración.
app.listen(app.get('port'),() => {
    console.log("Servidor escuchando en el puerto", app.get("port"));
});
