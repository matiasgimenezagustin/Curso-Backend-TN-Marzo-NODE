const tiposMenores = resultados.filter(
        (triangulo) => {
            return triangulo.cantidad === menorCantidad
        }
    )
    .map(
        triangulo => triangulo.tipo
    );

[
    'isoceles',
    'escaleno'
]