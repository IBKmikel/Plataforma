const express = require('express')
const multer = require('multer')
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController')
const mdAuth = require('../middlewares/authenticated')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/avatar/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '.' + file.mimetype.split('/')[1])
  }
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
    } else {
      return cb(new Error('Invalid file type'))
    }
  }
})
// const md = express.urlencoded({ extended: true })

const router = express.Router()

router.get('/user/me', [mdAuth.asureAuth], getUser)
router.get('/users', [mdAuth.asureAuth], getUsers)
router.post('/user', [mdAuth.asureAuth, upload.array('avatar', 1)], createUser)
router.patch('/user/:id', [mdAuth.asureAuth, upload.array('avatar')], updateUser)
router.delete('/user/:id', [mdAuth.asureAuth], deleteUser)
// router.post('/user', [mdAuth.asureAuth, upload.array('avatar', 1)], createUser)

module.exports = router
