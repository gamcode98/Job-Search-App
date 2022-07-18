const express = require('express')
const authValidation = require('../middleware/authValidation')
const checkOwnership = require('../middleware/checkOwnership')
const checkRoles = require('../middleware/checkRoles')
const OfferService = require('./../services/offer.service')

const offers = (app) => {
  const router = express.Router()
  const offerServ = new OfferService()

  app.use('/api/offers', router)

  router.get('/', async (req, res) => {
    try {
      const offers = await offerServ.getAll()
      return res.json(offers)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        error: true,
        message: 'Something went wrong',
      })
    }
  })

  router.get(
    '/my-offers',
    authValidation,
    checkRoles('employer'),
    async (req, res) => {
      const { id } = req.user
      const offers = await offerServ.getOffersByOwner(id)
      return res.json(offers)
    }
  )

  router.post('/', authValidation, checkRoles('employer'), async (req, res) => {
    const { id } = req.user
    const { body } = req
    const data = {
      ...body,
      postOwnerId: id,
    }
    const offer = await offerServ.create(data)
    return res.status(201).json({
      message: 'created',
      offer,
    })
  })

  router.put(
    '/:id',
    authValidation,
    checkRoles('employer'),
    checkOwnership,
    async (req, res) => {
      const { id } = req.params
      const { body } = req
      const offer = await offerServ.update(id, body)
      return res.json({
        message: 'Updated',
        offer,
      })
    }
  )

  router.patch(
    '/:id',
    authValidation,
    checkRoles('postulant'),
    async (req, res) => {
      try {
        const postulantId = req.user.id
        const { id } = req.params
        const offer = await offerServ.getOne(id)
        if (!offer) {
          return res.status(404).json({
            error: true,
            message: 'Offer not found',
          })
        }
        const { applicants } = offer

        const found = applicants.find(
          (postulant) => postulant.toString() === postulantId
        )

        if (found) {
          return res.status(403).json({
            error: true,
            message: 'You have already applied to this offer',
          })
        }
        applicants.push(postulantId)
        const data = { ...offer, applicants }
        const offerUpdated = await offerServ.update(id, data)
        return res.json({
          message: 'Updated',
          offerUpdated,
        })
      } catch (error) {
        return res.status(500).json({
          error: true,
          message: 'Something went wrong',
        })
      }
    }
  )

  router.delete(
    '/:id',
    authValidation,
    checkRoles('employer'),
    checkOwnership,
    async (req, res) => {
      const { id } = req.params
      const offer = await offerServ.delete(id)
      return res.json({
        message: 'Deleted',
        offer,
      })
    }
  )
}

module.exports = offers
