const { BooksModel} = require('../models')
const {exhandler } = require('../utils')

module.exports = {

  // gets the books!! :D
  async getBooks(req, res, next){
    try {
      res.send(  await BooksModel.paginate({}, {
        sort: 'title',
        page: req.params.page && req.params.page > 0 ? req.params.page : 1,
        limit: 20,
      }) )
    } catch(e) {
      return exhandler(res)
    }
  },


  // posts a book broo
  async postBook(req, res, next){
    try
    {
      // check if book with same title already exists
      if( await BooksModel.findOne({ title: req.body.title }) )
        return res.status(422).send({
          success: false,
          message: 'A book with the same title already exists.'
        })
      else
        res.send( await BooksModel.create({
          title: req.body.title,
          description: req.body.description,
          posted_by: req.user.id, // current user posting the book
        }) )
    }
    catch( e) {
      return exhandler(res)
    }
  },


  // delete a book
  async deleteBook(req, res, next) {
    try {
      res.send( await BooksModel.deleteOne({
        _id: req.params.book_id,
        posted_by: req.user.id,
      }) )
    }
    catch( e) {
      return exhandler(res)
    }
  },

  // retrieves user's posted books
  async getMyBooks(req, res, next){
    try {
      // sets the page for pagination
      let p = req.params.page && req.params.page > 0 ? req.params.page : 1

      // sets pagination limit
      let l = 20

      // the query
      res.send(
        await BooksModel.paginate({
          posted_by: req.user.id,
        }, {
          sort: 'title',
          limit: l,
          page: p,
        })
      )
    } catch(e) {
      return exhandler(res)
    }
  },


}
