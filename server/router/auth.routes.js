const express = require('express')
const { login, refreshAccessToken, registerUser } = require('../controllers/authController')

const router = express.Router()

router.post('/auth/register', registerUser)
router.post('/auth/login', login)
router.post('/auth/refresh_access_token', refreshAccessToken)

module.exports = router
