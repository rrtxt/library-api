const express = require('express')
const app = express()
const db = require('../models')
const userRoutes = require('./routes/UserRoute')
const errorMiddleware = require('./middlewares/errorMiddleware')
const port = 3000

const startServer = async () => {
  try {
    app.get('/', (req, res) => {
      res.send('hello world')
    })

    // Router
    app.use(express.json())
    app.use(userRoutes)
    app.use(errorMiddleware)

    await db.sequelize.sync()
    console.log('Database Synced')

    app.listen(port, () => {
      console.log('Server running at:', port)
    })
  } catch (err) {
    console.error('Error running server:', err);
  }
}

startServer()
