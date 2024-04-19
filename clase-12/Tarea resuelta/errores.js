class ErrorCustom{
    constructor (code, message){
        this.code = code
        this.message = message
    }
}

const ERRORES = {
    ERROR_INTERNO_SERVIDOR: new ErrorCustom(4, 'Error interno del servidor' ),
    FALLO_CRITICO_SERVIDOR: new ErrorCustom(5, 'Fallo critico del servidor'),
    USUARIO_NO_ENCONTRADO: new ErrorCustom(3, 'Usuario no encontrado')
}   


module.exports = {ERRORES}