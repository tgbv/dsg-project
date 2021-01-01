const Router = require('express').Router()
const { BooksController } = require('../controllers')
const { CheckBooksInputMiddleware, MustBeLoggedOnMiddleware} = require('../middlewares')

module.exports = Router
  .get('/:page?', BooksController.getBooks)
  .get('/my/:page?', MustBeLoggedOnMiddleware, BooksController.getMyBooks)

  .post('/', CheckBooksInputMiddleware, MustBeLoggedOnMiddleware, BooksController.postBook)
  .delete('/:book_id', MustBeLoggedOnMiddleware, BooksController.deleteBook)
