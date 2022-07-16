const { mongoose } = require('./../config/db')

const Schema = mongoose.Schema

const countrySchema = new Schema(
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

const CountryModel = mongoose.model('Country', countrySchema)

module.exports = CountryModel
