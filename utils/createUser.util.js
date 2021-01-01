const { UsersModel } = require('../models')
const Bcrypt = require('bcrypt')

module.exports = async (data, role = 2)=>{
  try {
    // check if user exists
    let query = await UsersModel.findOne({
      username: data. username
    })

    if(query)
      return {
        success: false,
        message: 'Username already exists',
        code: 422,
      }

    // if user doesn't exist create it
    else {
      await UsersModel.create({
        username: data.username,
        password: Bcrypt.hashSync(data.password, 12),
        role: role,
      })

      return {
        success: true,
        code: 200,
      }
    }
  }

  catch(e) {
    return {
      success: false,
      message: 'Backend exception occurred.',
      code: 500,
    }
  }
}
