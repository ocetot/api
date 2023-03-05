const db = require('../../db/mysql');

const tabla = 'apitabla';

function todos () {
    return db.todos(tabla);
}

function uno(id){
    return db.uno(tabla, id);
}

module.exports = {
    todos,
    uno,
}