const courseRepository = require('../repositories/courseRepository')
const Course = require('../models/course')
const { getImagePath } = require('../utils/image')
module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleleCourse
}

async function getCourses (page, limit) {
  return await courseRepository.getCourses(page, limit)
}

async function getCourseById (id) {
  return await courseRepository.getCourseById(id)
}

async function createCourse (data) {
  const { course, file } = data

  if (file.length === 0) throw new Error('La miniatura es obligatoria')

  const imagePath = getImagePath(file)
  course.miniature = imagePath

  const dataCourse = new Course(course)
  return await courseRepository.createCourse(dataCourse)
}

async function updateCourse (id, data) {
  const validateCourse = await getCourseById(id)
  if (!validateCourse) throw new Error('El curso no existe')

  const { course, file } = data

  if (file !== undefined) {
    if (file.length > 0) {
      const imagePath = getImagePath(file)
      course.miniature = imagePath
    } else {
      delete course.miniature
    }
  }

  return await courseRepository.updateCourse(id, course)
}

async function deleleCourse (id) {
  const validateCourse = await getCourseById(id)
  if (!validateCourse) throw new Error('El curso no existe')

  return await courseRepository.deleleCourse(id)
}
