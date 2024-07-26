const menuRepository = require('../repositories/menuRepository')
const Menu = require('../models/menu')
module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu
}

async function createMenu (data) {
  const menu = new Menu(data)
  return await menuRepository.createMenu(menu)
}

async function getMenus (active) {
  return await menuRepository.getMenus(active)
}

async function updateMenu (id, data) {
  const validateUser = await menuRepository.getMenuById(id)
  if (!validateUser) throw new Error('El menú no existe')

  return await menuRepository.updateMenu(id, data)
}

async function deleteMenu (id) {
  const validateUser = await menuRepository.getMenuById(id)
  if (!validateUser) throw new Error('El menú no existe')
  return await menuRepository.deleteMenu(id)
}
