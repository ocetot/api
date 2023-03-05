exports.success = function (req, res, mensajeOk='', status = 200){
        res.status(status).send({
        error : false,
        status: status,
        body: mensajeOk
    });
}
exports.error = function (req, res, mensajeError='Error Interno', status=500){
        res.status(statusCode).send({
        error : true,
        status: statusCode,
        body: mensajeError
    });
}

