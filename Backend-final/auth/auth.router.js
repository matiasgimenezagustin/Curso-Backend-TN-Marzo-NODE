const express = require('express')
const { loginController, registerController, verifyTokenController } = require('./auth.controller')

const authRouter = express.Router()



/* /api/auth/register */
authRouter.post('/register', registerController)

/* /api/auth/login */
authRouter.post('/login', loginController)

/* /api/auth/verify-token */
authRouter.get('/verify-token', verifyTokenController)


module.exports = {authRouter}