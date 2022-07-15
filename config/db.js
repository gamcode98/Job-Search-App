const mongoose = require('mongoose')
const { dbUserName, dbPassword, dbHost, dbName } = require('.')

const connection = async () => {
  const conn = await mongoose.connect(
    `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
  )
  console.log(`Mongo DB connected: ${conn.connection.host}`)
}

module.exports = { connection, mongoose }