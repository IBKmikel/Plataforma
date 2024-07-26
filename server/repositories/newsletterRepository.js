const ObjectId = require('mongoose').Types.ObjectId
const Newsletter = require('../models/newsletter')

module.exports = {
  createNewsletter,
  getEmailsNewsletter,
  getNewsletterByField,
  deleteEmailsNewsletter
}

async function createNewsletter (newsletter) {
  return await newsletter.save()
}

async function getNewsletterByField (field) {
  if (ObjectId.isValid(field)) {
    return await Newsletter.findOne({ _id: field })
  } else {
    return await Newsletter.findOne({ email: field })
  }
}

async function getEmailsNewsletter (page, limit) {
  const options = {
    page,
    limit
  }
  return await Newsletter.paginate({}, options)
}

async function deleteEmailsNewsletter (id) {
  return await Newsletter.findByIdAndDelete(id)
}
