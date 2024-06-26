

const validacionEmail = (email) =>{
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

const validacionExistencia = (valor) => {
    return Boolean(valor)
}



module.exports = {validacionEmail, validacionExistencia}