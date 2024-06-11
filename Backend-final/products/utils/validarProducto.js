
const PROPIEDADES_NECESARIAS = ['titulo', 'precio', 'stock', 'codigo', 'descripcion']

const VALIDACIONES_PRODUCTO = {
    'precio': {
        validacion: (valor) => {
            return Boolean(valor) && !isNaN(valor) && valor > 1
        },
        errorText: 'Precio es un valor nulo o no es un numero positivo mayor que 1'
    },
    'titulo': {
        validacion: (valor) => {
            return Boolean(valor) && (typeof(valor) === 'string') && valor.length > 3 
        },
        errorText: 'Titulo debe ser un valor verdadero con una longitud mayor a 3 caracteres'
    },
    'stock': {
        validacion: (valor) => {
            return (Boolean(valor) && !isNaN(valor) && valor >= 1)
        },
        errorText: 'El stock debe ser un numero valido mayor a 1'
    },
    'descripcion': {
        validacion: (valor) => {
            return (Boolean(valor) && isNaN(valor) && valor.length > 20 && typeof(valor) === 'string')
        },
        errorText: 'El la descripcion debe ser un string de mas de 20 caracteres'
    },
    'codigo': {
        validacion: (valor) => {
            return (Boolean(valor)  && valor.length > 3)
        },
        errorText: 'El codigo debe ser un string de mas de 3 caracteres'
    }
}

const validarPropiedadesProducto = (producto) => {
    const propiedades_producto = Object.keys(producto)
    const propiedades_faltantes = []
    const propiedades_sobrantes = []
    for (let propiedades_necesaria of PROPIEDADES_NECESARIAS) {
        if (!propiedades_producto.includes(propiedades_necesaria)) {
            propiedades_faltantes.push(propiedades_necesaria)
        }
    }
    if (propiedades_faltantes.length > 0) {
        throw { status: 400, message: 'Faltan las propiedades [' + propiedades_faltantes.join(', ') + ']' }
    }
    for (let propiedad of propiedades_producto) {
        if (!PROPIEDADES_NECESARIAS.includes(propiedad)) {
            propiedades_sobrantes.push(propiedad)
        }
    }
    if (propiedades_sobrantes.length > 0) {
        throw { status: 400, message: 'Sobran las propiedades [' + propiedades_sobrantes.join(', ') + ']' }
    }
    for(let propiedad in VALIDACIONES_PRODUCTO){
        let valor = producto[propiedad]
        if(!VALIDACIONES_PRODUCTO[propiedad].validacion(valor)){
            throw {status: 400, message: VALIDACIONES_PRODUCTO[propiedad].errorText}
        }
    }
}






/* const verificarTitulo = validacionString(producto.titulo_prod)
        console.log(producto.titulo_prod)
        if(!verificarTitulo){
            throw {message: 'Title incorrect, The title must be sring and must be more than 3 characters', status: 400}
        }
        const verificarStock = validacionStock(producto.stock_prod)
        if(!verificarStock){
            throw {message: 'Stock incorrect, value must be numeric and must be more than 1 characters', status: 400}
        }
        const verificarLongitud = validacionLongitud(producto.descripcion_prod)
        if(!verificarLongitud){
            throw {message: 'Description incorrect, must be more than 20 characters', status: 400}
        }
        const verificarCodigo = validacionCodigo(producto.codigo_prod)
        if(!verificarCodigo){
            throw {message: 'Code incorrect, must be more than 1 characters', status: 400}
        }
        const verificarFecha = validacionFecha(producto.fecha_prod)
        if(!verificarFecha){
            throw {message: 'Date incorrect, must be more than 1 characters', status: 400}
        }
 */

/*validar titulo mas de 3 caracteres y que sea string   */
const validacionTitulo = (valor) => {
    return (typeof valor === 'string' && valor.length > 3)
}
/* validar descripcion mas de 20 caracteres  */
const validacionDescripcion = (valor) => {
    /* isString(value)   */
    return (typeof valor === 'string' && valor.length > 20)
}
/* validar stock al menos uno o mas  */
const validacionStock = (valor) => {
    return (typeof valor === 'number' && valor >= 1)
}
/* validar codigo lo que de string + de un caracter  */
const validacionCodigo = (valor) => {
    return (typeof valor === 'string' && valor.length > 1)
}

const validacionPrecio = (valor) => {
    return Boolean(valor) && isNaN(valor) 
}



module.exports = { validarPropiedadesProducto }