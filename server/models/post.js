const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')

const PostSchema = mongoose.Schema({
  title: String,
  miniature: String,
  content: String,
  path: {
    type: String,
    unique: true
  },
  createdAt: Date
})

PostSchema.plugin(paginate)

module.exports = mongoose.model('Post', PostSchema)
