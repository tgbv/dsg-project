const { SearchInputSchema } = require('../schemas')
const { exhandler } = require('../utils')

module.exports = (req, res, next)=>{
    let fields = SearchInputSchema.validate(req.body)

    if(fields.error)
      return res.status(422).send({
        success: false,
        message: fields.error,
      })
    else next()
}
