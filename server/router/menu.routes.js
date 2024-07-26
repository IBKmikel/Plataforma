const express = require('express')
const { createMenu, getMenus, updateMenu, deleteMenu } = require('../controllers/menuController')
const mdAuth = require('../middlewares/authenticated')

const router = express.Router()

router.post('/menu', [mdAuth.asureAuth], createMenu)
router.get('/menu', getMenus)
router.patch('/menu/:id', [mdAuth.asureAuth], updateMenu)
router.delete('/menu/:id', [mdAuth.asureAuth], deleteMenu)

module.exports = router
