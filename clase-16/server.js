const express = require('express')
const { productsRoute } = require('./router/products.route')
const { userRoute } = require('./router/user.route')
const hbs = require('hbs')

const app = express()

const PORT = 3000


app.use(express.static(__dirname + '/public'))

/* El motor de vistas utilizado en esta app es handlebars */
app.set('view engine', 'hbs')

/* Indicamos al motor de plantillas de donde debe tomar las plantillas */
app.set('views', __dirname + '/views' )



app.get('/test',  (req, res) =>{
    res.send('Hola mundo')
})


app.get('/home', (req, res) =>{
    res.render('home')
})















/* Asociar que el endpoint '/api/products' debe ir al productsRoute */
app.use('/api/products', productsRoute)

/* Asociar que el endpoint '/api/user' debe ir al userRoute */
app.use('/api/user', userRoute)




app.listen(3000, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})


