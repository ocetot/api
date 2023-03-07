const tabla = 'auth';


module.exports = function (dbInyectada) {

    let db = dbInyectada;

    if(!db){
        db = require('../../db/mysql');
    }

    
    function agregar(data) {

        const authData = {
            id: data.id,
        }
        if(data.usuario){
           authData.usuario=data.usuario 
        }
        if(data.password){
            authData.password = data.password
        }

        return db.agregar(tabla, authData);

    }

    return {

        
        agregar,
    }
}