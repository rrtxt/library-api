const { default: UserValidation } = require("../validators/userValidator")
const { default: ZodValidator } = require("../validators/zodValidator")

class UserService {
  static async getUsers() {
    return await this.userRepository.findAll()
  }

  static async getUserById(id) {
    return await this.userRepository.findUserById(id)
  }

  static async registerUser(userData) {
    user = ZodValidator.validate(UserValidation.CREATE, userData)
    return await this.userRepository.createUser(user)
  }

  static async updateUserById(id, userData) {
    user = ZodValidator.validate(UserValidation.UPDATE, userData)

    const updatedData = await this.userRepository.updateUser(id, user)
    return updatedData[1]
  }

  static async deleteUserById(id) {
    return await this.userRepository.deleteUser(id)
  }
}

module.exports = UserService
