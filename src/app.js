const express = require('express')
const app = express()
const db = require('../models')
// const UserController = require('./controllers/UserController')
const port = 3000
// const userController = new UserController()


// Router
const userRouter = require('./routes/UserRoute')
app.use(express.json())

try {
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    // app.get('/users', userController.getAlUsers)

    app.use('/', userRouter)

    db.sequelize.sync().then((res) => {
        console.log('Database synced');
        app.listen(port, () => {
            console.log('server running at:', port);
        })
    })

} catch (err) {
    console.error('Error syncing database:', err);
}