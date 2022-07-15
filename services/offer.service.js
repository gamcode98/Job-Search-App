const OfferModel = require('./../models/offer')

class OfferService {
  async getAll() {
    const offers = await OfferModel.find()
    return offers
  }

  async create(data) {
    const offer = await OfferModel.create(data)
    return offer
  }

  async delete(id) {
    const offer = await OfferModel.findByIdAndDelete(id)
    return offer
  }

  async update(id, data) {
    const offer = await OfferModel.findByIdAndUpdate(id, data, { new: true })
    return offer
  }
}

module.exports = OfferService
