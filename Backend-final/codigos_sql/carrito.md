REGLAS:
Lo que esta entre /**/ es un comentario


## CODIGO SQL PARA CREAR CARRITO

CREATE TABLE carritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usuarios(id) /*El id lo tomamos de el nombre de la columna en la tabla usuarios*/
)

FOREIGN KEY (<nombre de la columna que sera FK>) REFERENCES <nombre de la tabla a relacionar>(<nombre de la columna de la tabla a relacionar>)


## CODIGO LIMPIO:

CREATE TABLE carritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usuarios(id)
)



## CREAR TABLA CARRITO_PRODUCTOS 

CREATE TABLE carrito_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES carritos(id),
    FOREIGN KEY (product_id) REFERENCES productos(id)
)


PRODUCTOS
id  |  titulo  |   precio
20  |tv samsung|   200000


USERS
id  |  email  | password
1      pepe     valor

POSIBLES_USUARIOS
id  |  fecha


CARRITOS
id   |    user_id
1    |    1 


CARRITO_PRODUCTOS 
id     |    cart_id    |  product_id   |  cantidad
1      |    1          |   20          |     2