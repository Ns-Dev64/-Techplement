const express = require('express')
const app = express()
const dotenv = require('dotenv').config() //to use the stuff from .env file
const ConnectDb=require('./db')
const cors=require('cors')
app.use(cors())
const port = process.env.PORT;
app.use(express.json())
//Listening on the server at a port
app.listen(port, () => {
    console.log('listening on this port ', port)
  })
//Connecting to the database
ConnectDb()
//Configuring apis:
app.use('/api/v1',require('./routes'))