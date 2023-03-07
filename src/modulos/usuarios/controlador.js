const tabla = 'usuarios';


module.exports = function (dbInyectada) {

    let db = dbInyectada;

    if(!db){
        db = require('../../db/mysql');
    }

    function todos() {
        return db.todos(tabla);
    }

    function uno(id) {
        return db.uno(tabla, id);
    }


    function eliminar(body) {
        return db.eliminar(tabla, body);
    }


    function agregar(body) {
        return db.agregar(tabla, body);
    }

    return {

        todos,
        uno,
        eliminar,
        agregar,
    }
}