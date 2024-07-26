const newsletterServices = require('../services/newsletterServices')
module.exports = {
  createNewsletter,
  getEmailsNewsletter,
  deleteEmailsNewsletter
}

async function createNewsletter (req, res) {
  try {
    const { email } = req.body
    const result = await newsletterServices.createNewsletter(email)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function getEmailsNewsletter (req, res) {
  try {
    const { page = 1, limit = 10 } = req.params
    const result = await newsletterServices.getEmailsNewsletter(page, limit)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

async function deleteEmailsNewsletter (req, res) {
  try {
    const { id } = req.params
    const result = await newsletterServices.deleteEmailsNewsletter(id)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}
