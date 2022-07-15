const express = require('express')
const UserService = require('../services/user.service')

const users = (app) => {
  const userServ = new UserService()
  const router = express.Router()

  app.use('/api/users', router)

  router.get('/', async (req, res) => {
    const users = await userServ.getAll()
    return res.json(users)
  })

  router.post('/', async (req, res) => {
    const { body } = req
    const user = await userServ.create(body)
    return res.status(201).json(user)
  })

  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    const user = await userServ.update(id, body)
    return res.json(user)
  })

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const user = await userServ.delete(id)
    return res.json(user)
  })
}

module.exports = users
