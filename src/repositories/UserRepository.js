class UserRepository {
    constructor(userModel) {
        this.userModel = userModel
    }

    async findAll() {
        return await this.userModel.findAll()
    }

    async findUserById(id) {
        return await this.userModel.findByPk(id)
    }

    async createUser(userData) {
        return await this.userModel.create(userData)
    }
}

module.exports = UserRepository