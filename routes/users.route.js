// deprecated

const Router = require('express').Router()
const {UsersController} = require('../controllers')
const {MustBeLoggedOnMiddleware, MustBeAdminMiddleware} = require('../middlewares')

module.exports = Router
  .get('/', MustBeLoggedOnMiddleware, MustBeAdminMiddleware, UsersController.getUsers)
