const config = require('../config')
const mongoose = require('mongoose')

const connection = async () => {
  try {
    await mongoose.connect(config.uri, {
      dbName: 'test'
    })
    console.log('Connected to database')
  } catch (error) {
    console.error('COULD NOT CONNECT TO DATABASE', error.message)
  }
}

module.exports = connection
