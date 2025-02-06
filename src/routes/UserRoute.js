const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()
const userController = new UserController()

router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)

module.exports = router