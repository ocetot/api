const db = require('../../db/mysql');

const tabla = 'apitabla';

function todos () {
    return db.todos(tabla);
}

function uno(id){
    return db.uno(tabla, id);
}


function eliminar(body){
    return db.eliminar(tabla, body);
}


function agregar(body){
    return db.agregar(tabla, body);
}
    


module.exports = {
    todos,
    uno,
    eliminar,
    agregar,
    
}