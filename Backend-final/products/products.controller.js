

/* 
Que deberiamos validar antes de crear un producto
titulo: + de 3 caracteres y tiene que ser string
precio: mas de 1 y numerico
descripcion: + 20 caracteres y debe ser string
stock:  almenos 1 o mas
codigo: que sea string y mas de 1 caracter

Vamos a recibir estos datos y se los pasaremos al servicio, el servicio se encargara de validar
que el objeto recibido tenga correctamente las propiedades (NO DEBE FALTAR PROPIEDADES NI DEBE HABER PROPIEDADES DEMAS)

crearProduct({title, precio, descripcion, stock, codigo})

crearProduct({title, precio, descripcion, stock, codigo, fecha: 'pepe'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[fecha] no son datos habilitados para crear un producto'}


crearProduct({title, precio, descripcion, stock, codigo, fecha: 'pepe', nombre: 'juan'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[fecha, nombre] no son datos habilitados para crear un producto'}


crearProduct({title, precio, descripcion, codigo, fecha: 'pepe', nombre: 'juan'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[stock] es necesario para crear un producto'}


crearProduct({title, precio, codigo, fecha: 'pepe', nombre: 'juan'}) 
La funcion debera hacer un throw de error con el sig formato:
{status: 400, message: '[stock, descripcion] es necesario para crear un producto'}
*/

const postProductController = (req, res) =>{

}