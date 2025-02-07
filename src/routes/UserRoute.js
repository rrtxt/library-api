const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()
const validate = require('../middlewares/validateMiddleware')
const { userSchema, updateUserSchema } = require('../validators/userValidator')
const userController = new UserController()

router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users', validate(userSchema), userController.createUser)
router.put('/users/:id', validate(updateUserSchema), userController.updateUserById)
router.delete('/users/:id', userController.deleteUserById)

module.exports = router
