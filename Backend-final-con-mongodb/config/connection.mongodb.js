const conectionMongoose = require('mongoose')

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.290fk16.mongodb.net/${process.env.DB_NAME}`

conectionMongoose.connect(URI)
.then(
    () => {
        console.log('Conexion exitosa')
    }
)
.catch(
    (error) => {
        console.error('Error al conectar MongoDB:', error)
    }
)

module.exports = {conectionMongoose}