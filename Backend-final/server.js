const express = require('express')
const dotenv = require('dotenv')
const { authRouter } = require('./auth/auth.router')
dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()


app.use(express.json())

app.use('/api/auth', authRouter)


app.listen(PORT, () =>{
    console.log('Nuestra aplicacion se ejecuta en el puerto: ' + PORT)
})

