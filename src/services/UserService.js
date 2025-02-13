const UserRepository = require("../repositories/UserRepository")
const UserValidation = require("../validators/userValidator")
const ZodValidator = require("../validators/zodValidator")

class UserService {
  static async getUsers() {
    return await UserRepository.findAll()
  }

  static async getUserById(id) {
    return await UserRepository.findUserById(id)
  }

  static async registerUser(userData) {
    const user = ZodValidator.validate(UserValidation.CREATE, userData)
    return await UserRepository.createUser(user)
  }

  static async updateUserById(id, userData) {
    const user = ZodValidator.validate(UserValidation.UPDATE, userData)

    const updatedData = await UserRepository.updateUser(id, user)
    return updatedData[1]
  }

  static async deleteUserById(id) {
    return await UserRepository.deleteUser(id)
  }
}

module.exports = UserService
