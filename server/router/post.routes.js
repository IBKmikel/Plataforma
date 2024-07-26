const express = require('express')
const multer = require('multer')
const mdAuth = require('../middlewares/authenticated')
const { createPost, getPosts, updatePost, deletePost, getPost } = require('../controllers/postControlle')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, res) => {
    res(null, 'uploads/blog/')
  },
  filename: (req, file, res) => {
    res(null, Date.now() + '.' + file.mimetype.split('/')[1])
  }
})

const uploads = multer({
  storage,
  fileFilter: (req, file, res) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      res(null, true)
    } else {
      return res(new Error('Invalid file type'))
    }
  }
})

router.post('/post', [mdAuth.asureAuth, uploads.array('miniature', 1)], createPost)
router.get('/post', getPosts)
router.patch('/post/:id', [mdAuth.asureAuth, uploads.array('miniature', 1)], updatePost)
router.delete('/post/:id', [mdAuth.asureAuth], deletePost)
router.get('/post/:path', getPost)

module.exports = router
