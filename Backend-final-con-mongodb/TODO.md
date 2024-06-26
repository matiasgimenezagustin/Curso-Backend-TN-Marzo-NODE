
Desarrollar el endpoint 


DELETE /api/products/:pid

DELETE /api/products/90 

Response example:
{message: Producto con id 90 no existe, status: 404}

DELETE /api/products/1 
Response example: 
{message: 'Producto con id 1 eliminado correctamente', status: 200}



UPDATE /api/products/:pid
body:{
    titulo: 'nuevo valor de titulo',
    precio: 'nuevo valor de precio
}
EJEMPLO

UPDATE /api/products/90 

Response example:
{message: Producto con id 90 no existe, status: 404}


UPDATE /api/products/1 
Response example: 
{message: 'producto con id 1 actualizado correctamente', producto_actualizado: producto, status: 200}


DEBEN VALIDAR QUE LAS NUEVAS PROPIEDADES PASEN LAS VALIDACIONES

