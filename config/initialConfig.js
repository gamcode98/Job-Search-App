const dotenv = require('dotenv')
const countries = require('../seeder/countries')
const categories = require('../seeder/categories')
const CountryModel = require('./../models/country')
const CategoryModel = require('./../models/category')
const { connection } = require('./db')

dotenv.config()
connection()

const importConfig = async () => {
  try {
    await CountryModel.insertMany(countries)
    await CategoryModel.insertMany(categories)
    console.log('Data Imported')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const deleteConfig = async () => {
  try {
    await CountryModel.deleteMany()
    await CategoryModel.deleteMany()
    console.log('Data destroyed')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

switch (process.argv[2]) {
  case '-d': {
    deleteConfig()
    break
  }
  default: {
    importConfig()
  }
}
