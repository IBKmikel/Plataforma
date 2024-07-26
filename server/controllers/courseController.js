const courseServices = require('../services/courseServices')

module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  deleleCourse
}

async function createCourse (req, res) {
  try {
    const data = { course: req.body, file: req.files }
    const result = await courseServices.createCourse(data)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function getCourses (req, res) {
  try {
    const { page = 1, limit = 1 } = req.query
    const result = await courseServices.getCourses(page, limit)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function updateCourse (req, res) {
  try {
    const { id } = req.params
    const courseData = { course: req.body }
    if (req.files) {
      courseData.file = req.files
    }
    const result = await courseServices.updateCourse(id, courseData)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function deleleCourse (req, res) {
  try {
    const { id } = req.params
    const result = await courseServices.deleleCourse(id)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
