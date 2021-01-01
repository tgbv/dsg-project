const StatusCodes = require('http-status-codes')
const Bcrypt = require('bcrypt')
const { UsersModel } = require('../models')
const { unauth, JWT, exhandler, createUser } = require('../utils')

module.exports = {
  // logins the user
  async login(req, res, next){
    try {

      // get user from db
      let query = await UsersModel.findOne({
        username: req.body.username,
      })

      // if user found
      if(query)
      {

        // if password is correct
        if(Bcrypt.compareSync(req.body.password, query.password))
        {
          res.send({
            success: true,
            token: JWT.encrypt({
              id: query.id,
              role: query.role,
            }),
          })
          next()
        }

        // eh...
        else
          return unauth(res, 'Password is incorrect.')
      }

      // err...
      else
        return unauth(res, 'Username not registered.')

    } catch(e) {
      return exhandler(res)
    }
  },

  // registers the user
  async register(req, res, next){
    try {
      let r = await createUser(req.body, 2)

      return res.status(r.code).send(r)
    } catch(e) {
      return exhandler(res)
    }
  }
}
