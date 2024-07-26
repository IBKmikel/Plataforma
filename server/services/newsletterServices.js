const Newsletter = require('../models/newsletter')
const newsletterRepository = require('../repositories/newsletterRepository.js')

module.exports = {
  createNewsletter,
  getEmailsNewsletter,
  deleteEmailsNewsletter
}

async function createNewsletter (email) {
  if (!email) throw new Error('El email es obligatorio')

  email = email.toLowerCase()
  const result = await newsletterRepository.getNewsletterByField(email)
  if (result) throw new Error('El email ya esta registrado')

  const newsletter = new Newsletter({
    email
  })
  return await newsletterRepository.createNewsletter(newsletter)
}

async function getEmailsNewsletter (page, limit) {
  return await newsletterRepository.getEmailsNewsletter(page, limit)
}

async function deleteEmailsNewsletter (id) {
  const result = await newsletterRepository.getNewsletterByField(id)
  if (!result) throw new Error('El email no existe')

  return await newsletterRepository.deleteEmailsNewsletter(id)
}
