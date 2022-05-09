// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

///////////////////////////////////////////////////////////////////////
// This code is not needed when using Sequelize CLI
// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)
//   - OR -
// SEQUELIZE CONNECTION
// let sequelize = new Sequelize({  
//   username: "postgres",
//   password: null,
//   host: "127.0.0.1",
//   storage: process.env.PG_URI,
//   dialect: "postgres"
// })
//
// try {
//   sequelize.authenticate() 
//   console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//   console.log(`Unable to connect to PG: ${err}`) 
// }
///////////////////////////////////////////////////////////////////////

// ROOT
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Tour API'
  })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
