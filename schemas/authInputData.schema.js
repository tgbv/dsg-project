const Joi = require('joi')

module.exports = (req)=>{
  return Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern( /^[a-zA-Z0-9]{3,30}$/ ).required(),
    role: Joi.allow()
  })
}
