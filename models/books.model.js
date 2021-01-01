const {Schema, model} = require('mongoose')

const BooksSchema = new Schema(
  // actual schema
  {
    title: {
      type: String,
      unique: true,
      required: true,
      max: 256,
    },

    description: {
      type: String,
      required: true,
    },

    posted_by: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: require('./users.model'),
    }
  },

  // global schema options
  {
    timestamps: true
  }
)

BooksSchema.plugin( require('mongoose-paginate-v2') )

module.exports = new model('books', BooksSchema)
