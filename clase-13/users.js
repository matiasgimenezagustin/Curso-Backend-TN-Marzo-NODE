const obtenerUsuarios = (limite) =>{
    const usuarios = [
        {
            name: 'pepe',
            age: '24',
            email: 'pepe@gmail.com'
        },
        {
            name: 'pepe',
            age: '24',
            email: 'pepe@gmail.com'
        },
        {
            name: 'pepe',
            age: '24',
            email: 'pepe@gmail.com'
        },
        {
            name: 'pepe',
            age: '24',
            email: 'pepe@gmail.com'
        }
    ]
    if(limite){
        return usuarios.slice(0, limite)
    }
    return usuarios
}

module.exports = {obtenerUsuarios}