const express = require('express')
const { productsRoute } = require('./router/products.route')
const { userRoute } = require('./router/user.route')
const hbs = require('hbs')
const { CATEGORIAS_PRODUCTOS } = require('./utils/diccionarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

const PORT = 3000


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

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


app.get('/register', (req, res) =>{
    res.render('register')
})

/* 'pepe'  => 'sdadhsaodjowqdwqodbnpcbhasodcjds'*/

const users = []

const registerUser = async (userToRegister) =>{
    //Verificar que no exista un usuario con x email
    //some
    if(!users.some(user => user.email === userToRegister.email )){
        const hashedPassword = await bcrypt.hash(userToRegister.password, 10)
   
        userToRegister.password = hashedPassword
        users.push(userToRegister)
        return {message: 'User created!', ok: true}
    }
    else{
        return {message: 'Existent user email, please use other email', ok: false}
    }
   
   
}
/* 
Si mi controlador ejecuta una funcion asincrona debe ser declarada con async y debe usar await previo a la ejecucion de la funcion asincrona
*/

app.post('/register', async (req, res) =>{
    const { email, password } = req.body 
    const response = await registerUser({email, password})
    if(response.ok){
        res.redirect('/home')
    }
    else{
        res.render('register', {errorText: response.message})
    }
    
})


app.get('/login', (req, res)=>{
    res.render('login')
})


app.post('/login', async (req, res)=>{

    let { email, password, try_counter} = req.body
    console.log(req.body)

    const existentUser = users.find(user => user.email === email)
    
    try_counter = try_counter ? ++try_counter : 1

    let repeated_limit = try_counter > 2 
    if(existentUser){
        const sonIguales = await bcrypt.compare(password, existentUser.password)
        console.log(existentUser,sonIguales)
        if(sonIguales){
            /* CASO CORRECTO */
            const token = jwt.sign({email}, 'ffbea63b-3940-47e9', {expiresIn: '5d'})

            res.status(200).json({ok: true, message: 'Logeado con exito', token})
        }
        else{
            /* Devuelve una plantilla HTML PEROO deberia devolver un objeto */
            res.status(400).json({errorText: 'Contraseña incorrecta', try_counter, repeated_limit})
        }
    }
    else{
        res.status(404).json( {errorText: 'Usuario no existente', try_counter, repeated_limit })
    }
    /* Aqui va la logica de login */
})


app.post('/validar-token', (req, res) =>{
    /* Logica para validar el token */
})


/* Asociar que el endpoint '/api/products' debe ir al productsRoute */
app.use('/api/products', productsRoute)

/* Asociar que el endpoint '/api/user' debe ir al userRoute */
app.use('/api/user', userRoute)







app.listen(3000, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})


/* const prueba = async () =>{
    const hash = await bcrypt.hash('pepe', 10)

    const comparacion = await bcrypt.compare('pepe', '$2b$10$IFphkn2mhTtYjHJtX66QVOvm.2YG.cqSJWCM5NXcl2u3oHHmHX9Fq')
    console.log(comparacion)
}


prueba() */