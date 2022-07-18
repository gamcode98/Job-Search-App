const express = require('express')
const { port } = require('./config')
const { connection } = require('./config/db')
const auth = require('./routes/auth.routes')
const offers = require('./routes/offer.routes')
const users = require('./routes/user.routes')
require('./models/category')
require('./models/country')

connection()

const app = express()

app.use(express.json())

auth(app)
users(app)
offers(app)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
