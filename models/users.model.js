const {Schema, model} = require('mongoose')

const UserSchema = new Schema(
  // actual schema
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: Number,
      required: true,
    }
  },

  // global schema options
  {
    timestamps: true
  }
)

module.exports = new model('users', UserSchema)
