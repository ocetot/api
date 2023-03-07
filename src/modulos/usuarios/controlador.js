const tabla = 'usuarios';
const auth = require('../auth');


module.exports = function (dbInyectada) {

    let db = dbInyectada;

    if (!db) {
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


    async function agregar(body) {
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            activo: body.activo
        }
        const respuesta = await db.agregar(tabla, usuario);
        console.log('respuesta',respuesta)
        var insertId = 0;
        if (body.id == 0) {
            insertId = respuesta.insertId;
        } else { 
            insertId = body.id;
         }

        if (body.usuario || body.password) {
            await auth.agregar({
                id: insertId,
                usuario: body.usuario,
                password: body.password,

            })

        }

        return true;
    }
    return {

        todos,
        uno,
        eliminar,
        agregar,
    }
}