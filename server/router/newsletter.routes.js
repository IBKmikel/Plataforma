const express = require('express')
const mdAuth = require('../middlewares/authenticated')
const { createNewsletter, getEmailsNewsletter, deleteEmailsNewsletter } = require('../controllers/newsletterController')
const router = express.Router()

router.post('/newsletter', createNewsletter)
router.get('/newsletter', [mdAuth.asureAuth], getEmailsNewsletter)
router.delete('/newsletter/:id', [mdAuth.asureAuth], deleteEmailsNewsletter)

module.exports = router
