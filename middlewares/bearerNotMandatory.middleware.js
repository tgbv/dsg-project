const {JWT, forb} = require('../utils')

module.exports = (req, res, next)=>{

  // the only potential exception will be caused by JWT decrypt
  // which indicates bad token
  try {

    // attempt to decrypt the token
    req.user = JWT.decrypt(req.headers.authorization.split(' ')[1])

  } catch(e) {
    //console.log(e)
  }

  next()
}
