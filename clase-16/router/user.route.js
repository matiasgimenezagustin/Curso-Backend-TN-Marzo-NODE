const express = require('express')

const userRoute = express.Router()
userRoute.get('/', (req, res) =>{
    res.json({name: 'pepe'})
})
userRoute.post('/create', (req, res) =>{
    res.json({message: 'user created'})
})


module.exports = {userRoute}