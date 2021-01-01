/*
* handles admin-related requests
*
*
*
**/

const { UsersModel } = require('../models')
const { createUser, exhandler, JWT } = require('../utils')

module.exports = {

  // creates user
  async createUser(req, res, next){
    try {

      // checks if role is properly specified
      // antipattern to check here but it would been painful should we create another schema/middleware for it
      if( typeof 1 === 'number' && [1,2].includes(parseInt(req.body.role)) )
      {
        let r = await createUser(req.body, req.body.role)
        res.status(r.code).send(r)
        next()
      }

      // one error to rule them all
      else return res.status(422).send({
        success: false,
        message: "Invalid role"
      })

    } catch(e) {
      return exhandler(res)
    }
  },

  // deletes user
  async removeUser(req, res, next){
    try {
      await UsersModel.deleteOne({ _id: req.params.user_id})

      res.send({
        success: true
      })

      next()
    } catch(e) {
      return exhandler(res)
    }
  },

  // retrieves the users
  async getUsers(req, res, next){
    try {
      res.send({
        users: await UsersModel.find({})
      })
      next()
    } catch(e) {
      return exhandler(res)
    }
  }
}
