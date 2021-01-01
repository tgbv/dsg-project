// deprecated.


const {exhandler} = require('../utils')
const { UsersModel } = require('../models')

module.exports = {


  async getUsers(req, res, next){
    try {
      res.send({
        users: await UsersModel.find({})
      })
    } catch(e) {
      return exhandler(res)
    }
  }


}
