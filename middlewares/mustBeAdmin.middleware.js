const { JWT, forb } = require('../utils')

module.exports = (req, res, next)=>{

    // checks if user is an administrator
    // aka has role === 1
    if(req.user.role === 1)
      next()
    else
      return forb(res, 'You need a higher rank bro.')

}
