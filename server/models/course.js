const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')

const CourseSchema = mongoose.Schema({
  title: String,
  miniature: String,
  description: String,
  url: String,
  price: Number,
  score: Number
})

CourseSchema.plugin(paginate)

module.exports = mongoose.model('Course', CourseSchema)
