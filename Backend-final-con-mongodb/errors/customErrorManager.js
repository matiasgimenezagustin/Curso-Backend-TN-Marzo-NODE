class CustomError {
    constructor(message, status){
        this.message = message
        this.status = status
    }
}

const ERRORS = {
    'NOT_FOUND': new CustomError('No encontrado', 404)
}


module.exports = {CustomError}