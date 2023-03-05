const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}


let conexion;
let intentosConexion = 0;
const MAX_INTENTOS_CONEXION = 3;

function conMysql() {
    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            if (intentosConexion < MAX_INTENTOS_CONEXION) {
                intentosConexion++;
                console.log(`Intento de conexión número ${intentosConexion}`);
                setTimeout(conMysql, 200);
            } else {
                console.log('No se puede establecer una conexión a la base de datos después de varios intentos. Saliendo...');
                process.exit(1);
            }
        } else {
            console.log("                        __");
            console.log("                      .'  '.");
console.log("                  _.-'/  |  \\");
console.log("     ,        _.-\"  ,|  /  0 `-. ");
console.log("     |\\    .-\"       `--\"\"-.__.'=====================-,");
console.log("     \\ '-'`        .___.--._)=========================|");
console.log("      \\            .'      |                          |");
console.log("       |     /,_.-'        |        conectado         |");
console.log("     _/   _.'(             |           a  la          |");
console.log("    /  ,-' \\  \\            |        base de datos     |");
console.log("    \\  \\    `-'            |             👍😎         |");
console.log("     `-'                   '--------------------------'");
        }
    });
    conexion.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('La conexión a la base de datos se ha perdido. Intentando reconectar...');
            conMysql();
        } else {            
            throw err;
        }
    });
}

conMysql();

function todos(tabla) {
    return new Promise ((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`,(error,result)=>{
            if(error)return reject(error);
            resolve(result);
        })
    });

}

function uno() {

}

function agragar(tabla, data) {

}

function eliminar() {

}

module.exports = {
    todos,
    uno,
    agragar,
    eliminar,

}