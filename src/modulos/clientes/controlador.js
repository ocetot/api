const db = require('../../db/mysql');

const TABLA = 'apitabla';

function todos () {
    return db.todos(TABLA);
}

module.exports = {
    todos,
}