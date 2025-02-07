const UserRepository = require("../repositories/UserRepository")
const UserService = require("../services/UserService")
const { User } = require('../../models')
const { stat } = require("fs")

const userRepository = new UserRepository(User)
const userService = new UserService(userRepository)

class UserController {
  async getAllUsers(req, res) {
    const users = await userService.getUsers()

    return res.status(200).json({
      success: true,
      data: { users }
    })
  }

  async getUserById(req, res) {
    const { id } = req.params
    const user = await userService.getUserById(id)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    return res.status(200).json({
      success: true,
      data: user
    })
  }

  async createUser(req, res) {
    const { firstName, lastName, email } = req.body
    if (!firstName) {
      return res.status(400).json({
        success: false,
        message: "First Name is not provided"
      })
    }
    if (!lastName) {
      return res.status(400).json({
        success: false,
        message: "Last Name is not provided"
      })
    }
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is not provided"
      })
    }

    const userData = {
      firstName,
      lastName,
      email
    }
    const newUser = await userService.registerUser(userData)
    return res.status(201).json({
      success: true,
      message: "User has been created!",
      data: { newUser }
    })
  }


  async updateUserById(req, res) {
    const { id } = req.params
    const userData = req.body
    try {
      const updatedUser = await userService.updateUserById(id, userData)
      return res.status(203).json({
        success: true,
        message: "User update successfully",
        data: { updatedUser }
      })
    } catch (err) {
      let errMessage = err.message
      let statusCode = 500

      if (err.message === 'User Not Found') {
        statusCode = 404
      }

      return res.status(statusCode).json({
        success: false,
        message: errMessage
      })
    }
  }

  async deleteUserById(req, res) {
    const { id } = req.params
    try {
      await userService.deleteUserById(id)
      return res.status(203).json({
        success: true,
        message: "User deleted successfully",
      })
    } catch (err) {
      let errMessage = err.message
      let statusCode = 500

      if (err.message === 'User Not Found') {
        statusCode = 404
      }

      return res.status(statusCode).json({
        success: false,
        message: errMessage
      })
    }
  }
}

module.exports = UserController
