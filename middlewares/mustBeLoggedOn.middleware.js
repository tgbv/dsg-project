const {JWT, forb} = require('../utils')
const { UsersModel } = require('../models')

module.exports = async (req, res, next)=>{

  // the only potential exception will be caused by JWT decrypt
  // which indicates bad token

  // err.. also by JWT.isValid( ... )
  try {
    // split the token
    // (why do we specify "Bearer TOKENABCDEFGHI..." ???)
    let token = req.headers.authorization.split(' ')[1]

    // attempt to decrypt the token
    let user = JWT.decrypt(token)

    // check decrypted stuff
    // && user exists
    if(user && await UsersModel.findOne({ _id: user.id }))
    {
      req.user = user
      next()
    }
    else
      return forb(res, 'Bad token bro')

  } catch(e) {
    return forb(res, 'REALLY bad token bro')
  }
}
