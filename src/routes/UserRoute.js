const express = require('express')
const UserController = require("../controllers/UserController")

userRoutes = express.Router()
userRoutes.get('/users', UserController.getAllUsers)
userRoutes.get('/users/:id', UserController.getUserById)
userRoutes.post('/users', UserController.createUser)
userRoutes.put('/users/:id', UserController.updateUserById)
userRoutes.delete('/users/:id', UserController.deleteUserById)

module.exports = userRoutes
