let nombre : string = 'pepe'


/* nombre = 0
 */
console.log(nombre)


let nota : string = '10'

nota = '10 (diez)'


let edad : null | number = null

edad = 10

/* true, false, null, undefined */
let seEnvio : any = undefined

seEnvio = 'SI'

seEnvio = false



const saludar = ( nombre : string ) : string  =>{
    return 'hola ' + nombre
}

saludar('pepe')

const solicitarAyuda = ( type: string) : void => {
    
}
solicitarAyuda('INMEDIATA')

const persona : { nombre: string, edad: number, puesto: string, apellido: string } = {
    nombre: 'pepe',
    edad: 40,
    puesto: 'Senior en HTML +2 meses',
    apellido: ''
} 

persona.apellido = 'suarez'

console.log(persona)