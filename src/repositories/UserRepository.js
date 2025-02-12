const { User } = require("../../User")
const { default: NotFoundException } = require("../exceptions/NotFoundException")

class UserRepository {
  constructor() {
    this.userModel = User
  }

  static async findAll() {
    return await this.userModel.findAll()
  }

  static async findUserById(id) {
    const user = await this.userModel.findByPk(id)
    if (!user) {
      throw new NotFoundException(`user dengan id ${id} tidak ditemukan`)
    }

    return user
  }

  static async createUser(userData) {
    return await this.userModel.create(userData)
  }

  static async updateUser(id, userData) {
    const user = await this.userModel.update(userData,
      {
        where: {
          id
        },
        returning: true
      }
    )

    if (!user) {
      throw new NotFoundException(`user dengan id ${id} tidak ditemukan`)
    }

    return user
  }

  static async deleteUser(id) {
    const deletedUserId = await this.userModel.destroy({
      where: {
        id
      },
    })

    if (!deletedUserId) {
      throw new NotFoundException(`user dengan id ${id} tidak ditemukan`)
    }
    return deletedUserId
  }
}

module.exports = UserRepository
