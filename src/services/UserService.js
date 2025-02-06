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

    async registerUser(userDate) {
        return await this.userRepository.createUser(userDate)
    }
}

module.exports = UserService