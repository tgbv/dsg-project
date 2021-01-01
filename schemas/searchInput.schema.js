const Joi = require('joi')

module.exports = Joi.object({
  phrase: Joi.string().min(1).max(256).required(),
  search_by: Joi.valid( ...[ 'title', '_id', 'description'] ),
  order_by: Joi.valid( ...[ '_id', 'title' ] ),
})
