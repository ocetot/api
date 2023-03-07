const mysql = require('mysql2');
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




async function todos(tabla) {
    try {
      const [rows, fields] = await conexion.promise().query(`SELECT * FROM ??`, [tabla]);
      return rows;
    } catch (error) {
      console.error(`Error en la consulta a la tabla ${tabla}:`, error);
      throw { error: 'Database error', message: `Error al consultar la tabla ${tabla}` };
    }
  }
  

async function uno(tabla, id) {
    try {
      const [rows, fields] = await conexion.promise().query(`SELECT * FROM ${tabla} WHERE id = ?`, [id]);
      if (rows.length === 0) {
        throw { error: 'Not found', message: `No se encontró ningún registro con id=${id} en la tabla ${tabla}` };
      }
      return rows[0];
    } catch (error) {
      console.error(`Error en la consulta a la tabla ${tabla} con id=${id}:`, error);
      throw { error: 'Database error', message: `Error al consultar la tabla ${tabla} con id=${id}` };
    }
  }

  function eliminar (tabla, data){
    return new Promise((resolve, reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id=?`, [data.id], (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    });
}

function agregar(tabla, data){
  return new Promise((resolve, reject)=>{
      conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (error, result) => {
          return error ? reject(error) : resolve(result)
      })
  });
}



 



module.exports = {
    todos,
    uno,   
    eliminar,
    agregar    

}