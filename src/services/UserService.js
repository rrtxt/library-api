class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async getUsers() {
    return await this.userRepository.findAll()
  }

  async getUserById(id) {
    return await this.userRepository.findUserById(id)
  }

  async registerUser(userData) {
    return await this.userRepository.createUser(userData)
  }

  async updateUserById(id, userData) {
    const user = await this.getUserById(id)
    if (!user) throw new Error("User nor found")

    const updatedData = await this.userRepository.updateUser(id, userData)
    return updatedData[1]
  }

  async deleteUserById(id) {
    const user = await this.getUserById(id)
    if (!user) throw new Error("User Not Found")

    return await this.userRepository.deleteUser(id)
  }
}

module.exports = UserService
