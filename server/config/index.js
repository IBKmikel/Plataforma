const dotenv = require('dotenv')
dotenv.config()

const config = {
  dev: process.env.NODE_EMV !== 'production',
  port: process.env.PORT || 3000,
  uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}/`,
  version: process.env.API_VERSION,
  server: process.env.IP_SERVER,
  jwt: process.env.JWT_SECRET_KEY
}

module.exports = config
