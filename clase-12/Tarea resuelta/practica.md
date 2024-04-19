

### URL API: https://swapi.dev/api

**Documentacion: https://swapi.dev/documentation**


**planetas.js**

buscarPlanetaPorIdPlaneta(id_planeta) 
    - Me devuelve un objeto con el planeta seleccionado
    - Muestra por consola si hubo un error
    ERRORES POSIBLES (response):
        - Que el status sea 404
        - Que el ok sea false


**errores.js** (Opcional)

- Crear una clase llamada CustomError(mensaje, nombre, codigo)
- Crear un mapa de errores con los errores PLANETA_NO_ENCONTRADO, ERROR_INTERNO_DEL_SERVIDOR


### REGLAS

- Debe usarse async y await para el manejo de asincronia
- Debe usarse fetch para el consumo de la api
- Debe usarse try/catch para el manejo de errores
