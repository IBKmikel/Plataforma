const jwt = require('jsonwebtoken')
const config = require('../config')

const jwtSecret = config.jwt

function createAccessToken (user) {
  const expToken = new Date()
  expToken.setHours(expToken.getHours() + 3)

  const payload = {
    tokenType: 'access',
    userId: user._id,
    iat: Date.now(),
    exp: expToken.getTime()
  }

  return jwt.sign(payload, jwtSecret)
}

function createRefreshToken (user) {
  const expToken = new Date()
  expToken.getMonth(expToken.getMonth() + 1)

  const payload = {
    tokenType: 'refresh',
    userId: user._id,
    iat: Date.now(),
    exp: expToken.getTime()
  }

  return jwt.sign(payload, jwtSecret)
}

function decoded (token) {
  return jwt.decode(token, jwtSecret, true)
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  decoded
}
