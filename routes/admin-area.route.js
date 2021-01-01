/*
* Contains admin-related routes
*
*
*
*
*/

const Router = require('express').Router()
const { AdminRelatedController } = require('../controllers')
const { ValidateAuthInputDataMiddleware } = require('../middlewares')

module.exports = Router
  .get('/users', AdminRelatedController.getUsers)
  .post('/user',  ValidateAuthInputDataMiddleware, AdminRelatedController.createUser)
  .delete('/user/:user_id',  AdminRelatedController.removeUser)
