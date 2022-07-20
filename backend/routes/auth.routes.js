const express = require('express')
const AuthService = require('./../services/auth.service')

const auth = (app) => {
  const router = express.Router()
  const authServ = new AuthService()
  app.use('/api/auth', router)

  router.post('/signup', async (req, res) => {
    try {
      const { body } = req
      const result = await authServ.signup(body)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        error: true,
        message: 'Something went wrong',
      })
    }
  })

  router.post('/login', async (req, res) => {
    try {
      const { body } = req
      const result = await authServ.login(body)
      return res.status(result.error ? 404 : 200).json(result)
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: 'Something went wrong',
      })
    }
  })
}

module.exports = auth
