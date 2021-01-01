const Joi = require('joi')
const { BooksInputSchema } = require('../schemas')

module.exports = (req, res, next)=>{
  let values = BooksInputSchema.validate(req.body)

  if(values.error)
    return res.status(422).send({
      success: false,
      message: values.error
    })
  else
    next()
}
