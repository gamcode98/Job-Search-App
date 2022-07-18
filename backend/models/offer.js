const { mongoose } = require('./../config/db')

const Schema = mongoose.Schema

const offerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        // validate: (v) => Array.isArray(v) && v.length > 0,
      },
    ],
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
      // required: true,
      // validate: (v) => Array.isArray(v) && v.length > 0,
    },
    applicants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    salary: {
      type: Number,
      required: true,
    },
    postOwnerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  }
)

const OfferModel = mongoose.model('Offer', offerSchema)

module.exports = OfferModel
