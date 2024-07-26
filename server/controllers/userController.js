const userServices = require('../services/userServices')

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}

async function getUser (req, res) {
  try {
    const { userId } = req.user
    const result = await userServices.getUser(userId)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function getUsers (req, res) {
  try {
    const { active } = req.query
    const result = await userServices.getUsers(active)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function createUser (req, res) {
  try {
    const data = { user: req.body, file: req.files }
    const result = await userServices.createUser(data)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function updateUser (req, res) {
  try {
    const { id } = req.params
    const userData = { user: req.body }
    if (req.files) {
      userData.file = req.files
    }
    const result = await userServices.updateUser(id, userData)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function deleteUser (req, res) {
  try {
    const { id } = req.params
    const result = await userServices.deleteUser(id)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}
