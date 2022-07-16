const OfferService = require('./../services/offer.service')

const checkOwnership = async (req, res, next) => {
  const { id } = req.params
  const userId = req.user.id
  const offerServ = new OfferService()
  const { postOwnerId } = await offerServ.getOne(id)

  if (!postOwnerId) {
    return res.status(404).json({
      error: true,
      message: 'Offer not found',
    })
  }

  if (postOwnerId.toString() === userId) return next()

  return res.status(403).json({
    error: true,
    message: 'Insufficient permissions',
  })
}

module.exports = checkOwnership
