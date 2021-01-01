const jwt = require('jsonwebtoken')
const {InvalidTokensModel} = require('../models')

module.exports = {


  // encrypts the data
  encrypt(data){
    return jwt.sign (
      data,
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    )
  },


  // decrypts the token
  decrypt(token){
    return jwt.decode(token, process.env.JWT_SECRET)
  },

}
