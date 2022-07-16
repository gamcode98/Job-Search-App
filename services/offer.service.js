const OfferModel = require('./../models/offer')

class OfferService {
  async getAll() {
    const offers = await OfferModel.find()
      .populate('country')
      .populate('categories')
      .populate('postOwnerId', 'email')
    return offers
  }

  async getOne(id) {
    const offer = await OfferModel.findById(id)
    return offer
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
