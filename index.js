// includes
const Express = require('express')
const BodyParser = require('body-parser')
const Cors = require('cors')
const Mongoose = require('mongoose')
const Dotenv = require('dotenv')

// config && setup
Dotenv.config()

Mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
.then(console.log('connected to db'))
.catch(e=>console.log(e))

const Server = Express()
Server.use(BodyParser.json())
Server.use(Cors())
Server.use('/', require('./routes'))

// start the server
Server.listen(process.env.PORT, console.log(`Server started listening on port ${process.env.PORT}`))
