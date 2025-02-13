const { User } = require("../../models")
const NotFoundException = require("../exceptions/NotFoundException")

class UserRepository {
  static async findAll() {
    return await User.findAll()
  }

  static async findUserById(id) {
    const user = await User.findByPk(id)
    if (!user) {
      throw new NotFoundException(`user dengan id ${id} tidak ditemukan`)
    }

    return user
  }

  static async createUser(userData) {
    return await User.create(userData)
  }

  static async updateUser(id, userData) {
    const [affectedRow, updatedRow] = await User.update(userData,
      {
        where: {
          id
        },
        returning: true
      }
    )

    if (affectedRow === 0) {
      throw new NotFoundException(`user dengan id ${id} tidak ditemukan`)
    }

    return updatedRow[0]
  }

  static async deleteUser(id) {
    const deletedCount = await User.destroy({
      where: {
        id
      },
    })

    if (deletedCount === 0) {
      throw new NotFoundException(`user dengan id ${id} tidak ditemukan`)
    }

    return deletedCount
  }
}

module.exports = UserRepository
