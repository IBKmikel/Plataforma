const Course = require('../models/course')
module.exports = {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleleCourse
}

async function getCourses (page, limit) {
  const options = {
    page,
    limit
  }
  return await Course.paginate({}, options)
}

async function createCourse (course) {
  return await course.save()
}

async function getCourseById (id) {
  return await Course.findOne({ _id: id })
}

async function updateCourse (id, course) {
  return await Course.findOneAndUpdate({ _id: id }, course, {
    new: true
  })
}

async function deleleCourse (id) {
  return await Course.findByIdAndDelete(id)
}
