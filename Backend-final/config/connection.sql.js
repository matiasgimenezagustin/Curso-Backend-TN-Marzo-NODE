const mysql = require('mysql')


const DB_NAME = process.env.DB_NAME 
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_USERNAME = process.env.DB_USERNAME || 'root'


const userSettings = {
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME
}

const database = mysql.createConnection(userSettings)

database.connect((error) =>{
    if(error){
        console.error("Error de conexion:", error)
    }
    else{
        console.log('Te has conectado exitosamenta a la base de datos')
    }
})

module.exports = {database}