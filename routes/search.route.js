const Router = require('express').Router()

const { ValidateSearchInputMiddleware } = require('../middlewares')
const { SearchController } = require('../controllers')

module.exports = Router
  .post('/:page?', ValidateSearchInputMiddleware, SearchController)
