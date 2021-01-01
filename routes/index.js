const Router = require('express').Router()
const { MustBeLoggedOnMiddleware, MustBeAdminMiddleware } = require('../middlewares')

// thankfully .use returns the same instance of Router
// export them all in 'chain' style
module.exports = Router
  .use('/auth', require('./auth.route'))
  // use('/users', require('./users.route')) <--- deprecated
  .use('/admin-area', MustBeLoggedOnMiddleware, MustBeAdminMiddleware, require('./admin-area.route'))
  .use('/books', require('./books.route'))
  .use('/search', require('./search.route'))
