const Joi = require('joi')

module.exports = Joi.object({
  title: Joi.string().min(3).max(256).required(),
  description: Joi.string().min(3).max(2048).required(),
})
