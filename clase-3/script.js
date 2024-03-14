/* 
Quiero crear la funcion filtrar
debe recibir un array (el array a filtrar) y una callback (funcion) que devolvera un boolean
Vamos a crear una lista vacia (array)
Va a recorrer el array recibido y por cada elemento va a darselo a la callback, y dicha callback devolvera el boolean y dependiendo de si es verdadero, el elemento recorrido se va a agregar a la lista vacia

Retornara dicha lista
*/


const filtrar = (array, callback) =>{
    const arrayFiltrado = []

    for(let elemento of array){
        if(callback(elemento)){
            arrayFiltrado.push(elemento)
        }
    }

    return arrayFiltrado
}

const numeros = [-1, 0, 1, 2, 3]



const resultado = filtrar(numeros, (numero) => { 
    return numero >= 2
})

console.log(resultado)

console.log(filtrar(numeros, (numero) => { 
    return numero < 1
}))


const productos = [
    {
        nombre: 'manzana',
        precio: 15000
    },
    {
        nombre: 'banana',
        precio: 5000
    },
]

console.log(filtrar(productos, (producto) => {
    return producto.precio > 10000
}))
/* filtrar(numeros, () => { console.log('me ejecuto')})

filtrar(numeros, () => { console.log('me inicializo')})
 */
/* Funciones de alto orden */



/* Yagni: you arent gonna need it */