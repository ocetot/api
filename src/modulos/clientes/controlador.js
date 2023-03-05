const db = require('../../db/mysql');

const TABLA = 'cliente';

function todos () {
    return db.todos(TABLA);
}

module.exports = {
    todos,
}