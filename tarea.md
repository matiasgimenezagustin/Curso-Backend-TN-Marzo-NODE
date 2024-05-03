Desarrollar una API:

Productos:
esquema de un producto:
{
    nombre: string,
    precio: number, 
    id: number, 
    descripcion: string
}


Route: '/api/productos'

GET / obtener todos los productos
GET /:id Obtener un producto por su id


POST / Agregar un producto (el id debe ser autogenerado)
body: 
{
    nombre
    precio
    descripcion
}

PUT /:id actualizar un producto por su id 
body: 
{
    nombre: 'nuevo nombre',
    precio: number (nuevo precio)
}

Opcional:  implementar un middleware que verifique que haya x-api-key en los headers
