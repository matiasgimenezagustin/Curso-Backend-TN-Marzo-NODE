
const filesystem = require('fs')

/* console.log(filesystem.readFileSync('./texto.js', {encoding: 'utf-8'})) */
/* filesystem.writeFileSync('./logs/registro-1', 'Este es un registro desde mi JS', {encoding: 'utf-8'}) */

const variables = JSON.parse(filesystem.readFileSync('./configuracion/variables.json', {encoding: 'utf-8'}))

variables.edad_maxima = 80

filesystem.writeFileSync('./configuracion/variables.json', JSON.stringify(variables), {encoding: 'utf-8'})
