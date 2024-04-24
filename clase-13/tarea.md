### Crear una API con Express

**Crear el siguente endpoint para nuestra API**

Cada producto en nuestra API debe seguir el siguente esquema:

{
    nombre, 
    id,
    codigo,
    fecha_creacion,
    precio
}


**GET**
/api/products 

**queries string**: 
- limite (cuantos productos devolvera el resultado),
- maximo (precio maximo), 
- minimo (precio minimo), 
- search (traera a todos los productos que en su nombre incluyan a search)


return 

{
    mensaje: 'Productos obtenidos'
    resultado: [
        {Object}, {Object}
    ],
    estatus: 200
}