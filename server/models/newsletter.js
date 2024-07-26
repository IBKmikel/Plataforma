const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')

const NewsletterSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  }
})

NewsletterSchema.plugin(paginate)

module.exports = mongoose.model('Newsletter', NewsletterSchema)
