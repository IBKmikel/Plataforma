const menuService = require('../services/menuServices')

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu
}

async function createMenu (req, res) {
  try {
    const menu = req.body
    const result = await menuService.createMenu(menu)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function getMenus (req, res) {
  try {
    const { active } = req.query
    const result = await menuService.getMenus(active)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function updateMenu (req, res) {
  try {
    const { id } = req.params
    const data = req.body
    const result = await menuService.updateMenu(id, data)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function deleteMenu (req, res) {
  try {
    const { id } = req.params
    const result = await menuService.deleteMenu(id)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
