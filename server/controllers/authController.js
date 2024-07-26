const userServices = require('../services/userServices')

module.exports = {
  registerUser,
  login,
  refreshAccessToken
}

async function registerUser (req, res) {
  try {
    const user = req.body
    const result = await userServices.registerUser(user)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function login (req, res) {
  try {
    const user = req.body
    const result = await userServices.login(user)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function refreshAccessToken (req, res) {
  try {
    const { token } = req.body
    const result = await userServices.refreshAccessToken(token)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}
