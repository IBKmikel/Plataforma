const express = require('express')
const multer = require('multer')
const { getCourses, createCourse, updateCourse, deleleCourse } = require('../controllers/courseController')
const mdAuth = require('../middlewares/authenticated')
const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, res) => {
    res(null, 'uploads/course/')
  },
  filename: (req, file, res) => {
    res(null, Date.now() + '.' + file.mimetype.split('/')[1])
  }
})

const upload = multer({
  storage,
  fileFilter: (req, file, res) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      res(null, true)
    } else {
      return res(new Error('Invalid file type'))
    }
  }
})

router.post('/course', [mdAuth.asureAuth, upload.array('miniature', 1)], createCourse)
router.get('/course', getCourses)
router.patch('/course/:id', [mdAuth.asureAuth, upload.array('miniature', 1)], updateCourse)
router.delete('/course/:id', [mdAuth.asureAuth], deleleCourse)

module.exports = router
