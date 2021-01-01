const { BooksModel } = require('../models')
const { exhandler} = require('../utils')

module.exports = async (req, res, next)=>{
  try {
    let p = req.params.page && req.params.page > 0 ? req.params.page : 1
    let words = req.body.phrase.split(' ')
                .map(word=>new RegExp(word, "i"))

    res.send(
      await BooksModel.paginate({
        [req.body.search_by]: { $in: words }
      }, {
        sort: req.body.order_by,
        limit: 20,
        page: p,
      })
    )
  } catch( e) {
    console.log(e.message)
    return exhandler(res)
  }
}
