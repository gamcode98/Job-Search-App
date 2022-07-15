const express = require('express')
const OfferService = require('./../services/offer.service')

const offers = (app) => {
  const router = express.Router()
  const offerServ = new OfferService()

  app.use('/api/offers', router)

  router.get('/', async (req, res) => {
    const offers = await offerServ.getAll()
    return res.json(offers)
  })

  router.post('/', async (req, res) => {
    const { body } = req
    const offer = await offerServ.create(body)
    return res.status(201).json(offer)
  })

  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    const offer = await offerServ.update(id, body)
    return res.json(offer)
  })

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const offer = await offerServ.delete(id)
    return res.json(offer)
  })
}

module.exports = offers
