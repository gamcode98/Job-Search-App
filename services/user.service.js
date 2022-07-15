const UserModel = require('../models/user')

class UserService {
  async getAll() {
    const users = await UserModel.find()
    return users
  }

  async getByEmail(email) {
    const user = await UserModel.findOne({ email })
    return user
  }

  async create(data) {
    const user = await UserModel.create(data)
    return user
  }

  async update(id, data) {
    const user = await UserModel.findByIdAndUpdate(id, data, { new: true })
    return user
  }

  async delete(id) {
    const user = await UserModel.findByIdAndDelete(id)
    return user
  }
}

module.exports = UserService
