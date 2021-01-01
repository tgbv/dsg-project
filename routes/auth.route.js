// import stuff
const Router = require('express').Router()
const { AuthController } = require('./../controllers')
const { BearerNotMandatoryMiddleware, ValidateAuthInputDataMiddleware } = require('../middlewares')

// export routes in 'chain' style
module.exports = Router
  .post('/login', ValidateAuthInputDataMiddleware, AuthController.login)
  .post('/register', BearerNotMandatoryMiddleware,
                    ValidateAuthInputDataMiddleware,
                    AuthController.register)
