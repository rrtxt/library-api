const { watch } = require("fs")
const UserService = require("../services/UserService")

class UserController {
  static async getAllUsers(req, res, nextFunction) {
    try {
      const users = await UserService.getUsers()

      res.status(200).json({
        success: true,
        data: { users }
      })
    } catch (err) {
      nextFunction(err)
    }
  }

  static async getUserById(req, res, nextFunction) {
    try {
      const { id } = req.params
      const user = await UserService.getUserById(id)
      res.status(200).json({
        success: true,
        data: user
      })
    } catch (err) {
      nextFunction(err)
    }
  }

  static async createUser(req, res, nextFunction) {
    try {
      const newUser = await UserService.registerUser(req.body)
      return res.status(201).json({
        success: true,
        message: "User has been created!",
        data: { newUser }
      })
    } catch (err) {
      nextFunction(err)
    }
  }


  static async updateUserById(req, res, nextFunction) {
    try {
      const { id } = req.params
      const updatedUser = await UserService.updateUserById(id, req.body)
      return res.status(203).json({
        success: true,
        message: "User update successfully",
        data: { updatedUser }
      })
    } catch (err) {
      nextFunction(err)
    }
  }

  static async deleteUserById(req, res, nextFunction) {
    const { id } = req.params
    try {
      await UserService.deleteUserById(id)
      return res.status(203).json({
        success: true,
        message: "User deleted successfully",
      })
    } catch (err) {
      nextFunction(err)
    }
  }
}

module.exports = UserController
