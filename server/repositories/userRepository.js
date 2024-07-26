const ObjectId = require('mongoose').Types.ObjectId
const user = require('../models/user')

module.exports = {
  registerUser,
  findOne,
  find,
  updateUser,
  deleteUser
  // createUser
}

async function registerUser (user) {
  return await user.save()
}

async function findOne (field) {
  if (ObjectId.isValid(field)) {
    return await user.findOne({ _id: field })
  } else {
    return await user.findOne({ email: field })
  }
}

async function find (active) {
  if (active === undefined) {
    return await user.find()
  } else {
    return await user.find({ active })
  }
}

async function updateUser (id, data) {
  return await user.findOneAndUpdate({ _id: id }, data, {
    new: true
  })
}

async function deleteUser (id) {
  return await user.findByIdAndDelete(id)
}

// async function createUser (user) {
//   return await user.find()
// }
