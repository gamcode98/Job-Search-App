const { mongoose } = require('./../config/db')

const Schema = mongoose.Schema

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

const CategoryModel = mongoose.model('Category', categorySchema)

module.exports = CategoryModel
