// deprecated
// avoid.

const {Schema, model} = require('mongoose')

const InvalidTokensSchema = new Schema(
  // actual schema
  {
    token: {
      type: String,
      required: true,
    },
  },

  // global schema options
  {
    timestamps: true
  }
)

module.exports = new model('invalid_tokens', InvalidTokensSchema)
