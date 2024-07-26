const ObjectId = require('mongoose').Types.ObjectId
const Menu = require('../models/menu')
module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  getMenuById,
  deleteMenu
}

async function createMenu (menu) {
  return await menu.save()
}

async function getMenus (active) {
  if (active === undefined) {
    return await Menu.find().sort({ order: 'asc' })
  } else {
    return await Menu.find({ active }).sort({ order: 'asc' })
  }
}

async function getMenuById (id) {
  if (ObjectId.isValid(id)) {
    return await Menu.findOne({ _id: id })
  }
}

async function updateMenu (id, data) {
  return await Menu.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
}

async function deleteMenu (id) {
  return await Menu.findByIdAndDelete({ _id: id })
}
