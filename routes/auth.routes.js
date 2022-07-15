const express = require('express')
const AuthService = require('./../services/auth.service')

const auth = (app) => {
  const router = express.Router()
  const authServ = new AuthService()
  app.use('/api/auth', router)

  router.post('/signup', async (req, res) => {
    const { body } = req
    const user = await authServ.signup(body)
    return res.status(201).json(user)
  })

  router.post('/login', async (req, res) => {
    const { body } = req
    const user = await authServ.login(body)
    return res.json(user)
  })
}

module.exports = auth
