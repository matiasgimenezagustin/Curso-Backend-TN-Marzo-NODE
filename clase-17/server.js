const express = require('express')
const { productsRoute } = require('./router/products.route')
const { userRoute } = require('./router/user.route')
const hbs = require('hbs')
const { CATEGORIAS_PRODUCTOS } = require('./utils/diccionarios')

const app = express()

const PORT = 3000


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

/* El motor de vistas utilizado en esta app es handlebars */
app.set('view engine', 'hbs')

/* Indicamos al motor de plantillas de donde debe tomar las plantillas */
app.set('views', __dirname + '/views' )



app.get('/test',  (req, res) =>{
    res.send('Hola mundo')
})



app.get('/home', (req, res) =>{

    const usuario = {
        name: 'pepe',
        isAdmin: false
    }
    res.render('home', usuario )
})

const products  = [
    {
        name: 'tv samsung',
        price: 3000,
        id: 1,
        categoria: CATEGORIAS_PRODUCTOS.TECNOLOGIA.value
    },
    {
        name: 'Iphone ',
        price: 1500,
        id: 2,
        categoria: CATEGORIAS_PRODUCTOS.TECNOLOGIA.value
    },
    {
        name: 'Iphone 19',
        price: 4000,
        id: 3,
        categoria: CATEGORIAS_PRODUCTOS.TECNOLOGIA.value
    },
    {
        name: 'Casa',
        price: 5000,
        id: 4,
        categoria: CATEGORIAS_PRODUCTOS.INMUEBLES.value
    }
]
const categorias = []
for(let key in CATEGORIAS_PRODUCTOS){
    categorias.push(CATEGORIAS_PRODUCTOS[key])
}


app.get('/products',(req, res) =>{
    const products  = [
        {
            name: 'tv samsung',
            price: 3000,
            id: 1,
            categoria: CATEGORIAS_PRODUCTOS.TECNOLOGIA.value
        },
        {
            name: 'Iphone ',
            price: 1500,
            id: 2,
            categoria: CATEGORIAS_PRODUCTOS.TECNOLOGIA.value
        },
        {
            name: 'Iphone 19',
            price: 4000,
            id: 3,
            categoria: CATEGORIAS_PRODUCTOS.TECNOLOGIA.value
        },
        {
            name: 'Casa',
            price: 5000,
            id: 4,
            categoria: CATEGORIAS_PRODUCTOS.INMUEBLES.value
        }
    ]
    const categorias = []
    for(let key in CATEGORIAS_PRODUCTOS){
        categorias.push(CATEGORIAS_PRODUCTOS[key])
    }
    


    res.render('products', {products, categorias})
})


app.post('/products', (req, res) =>{
    const {categoria_seleccionada } = req.body
    console.log(req.body)
    
    if(categoria_seleccionada !== 'NADA'){
        const filteredProducts = products.filter(product => product.categoria === req.body.categoria_seleccionada)
        res.render('products', {products: filteredProducts, categorias})
    }
    else{
        res.render('products', {products, categorias})
    }
    
})








/* Asociar que el endpoint '/api/products' debe ir al productsRoute */
app.use('/api/products', productsRoute)

/* Asociar que el endpoint '/api/user' debe ir al userRoute */
app.use('/api/user', userRoute)




app.listen(3000, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})


