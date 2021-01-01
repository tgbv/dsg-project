const Joi = require('joi')
const { AuthInputDataSchema } = require('../schemas')
let { forb } = require('../utils')

module.exports = (req, res, next)=>{


  // check if we are registering a new user
  // based on this, append role schema or not
  // if(req.originalUrl.indexOf('/register') > -1)
  //   AuthInputDataSchema = AuthInputDataSchema.append({
  //     role: Joi.number().required().min(1).max(2),
  //   })

  // validate data based on defined schema
  let values = AuthInputDataSchema(req).validate(req.body)

  // in case body is bad boy
  if(values.error)
    return res.status(400).send({
      success: false,
      message: values.error
    })
  else
  {
    // A bit antipattern to check for here, but
    // administrators can be added only by other administrators
    // Therefore if role === 1 the user making the request
    // must be an admin
    // if(req.originalUrl.indexOf('/register') > -1)
    // {
    //   console.log(req.originalUrl)
    //   if(parseInt(req.body.role) === 1)
    //   {
    //     if(req.user && req.user.role === 1)
    //       return next()
    //     else
    //       return forb(res, 'You must be an administrator to create other admins.')
    //   }
    // }
    next()
  }


}
