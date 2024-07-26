const bcrypt = require('bcryptjs')
const userRepository = require('../repositories/userRepository')
const User = require('../models/user')
const jwt = require('../utils/jwt')
const { getImagePath } = require('../utils/image')

module.exports = {
  registerUser,
  login,
  refreshAccessToken,
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
  // hasRequiredFields
}

async function registerUser (user) {
  const { firstname, lastname, email, password } = user

  if (!email) throw new Error('El email es obligatorio')
  if (!password) throw new Error('La contraseña es obligatorio')

  const emailLowerCase = email.toLowerCase()
  const result = await userRepository.findOne(emailLowerCase)

  if (result) throw new Error('El usuario ya existe')

  const dataUser = new User({
    firstname,
    lastname,
    email: email.toLowerCase(),
    password,
    role: 'user',
    active: false
  })

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)
  dataUser.password = hashPassword

  return await userRepository.registerUser(dataUser)
}

async function login (user) {
  const { email, password } = user

  if (!email) throw new Error('El email es obligatorio')
  if (!password) throw new Error('La contraseña es obligatorio')

  const emailLowerCase = email.toLowerCase()
  const result = await userRepository.findOne(emailLowerCase)

  if (!result) throw new Error('El usuario no existe')

  const isValid = await bcrypt.compare(password, result.password)

  if (!isValid) throw new Error('Credenciales erroneas')
  if (!result.active) throw new Error('Usuario no autorizado o no activo')

  return {
    access: jwt.createAccessToken(result),
    refresh: jwt.createRefreshToken(result)
  }
}

async function refreshAccessToken (token) {
  if (!token) throw new Error('Token requerido')
  const { userId } = jwt.decoded(token)
  const result = await userRepository.findOne(userId)

  if (!result) throw new Error('El usuario no existe')

  return {
    accessToken: jwt.createAccessToken(result)
  }
}

async function getUser (userId) {
  return await userRepository.findOne(userId)
}

async function getUsers (active) {
  return await userRepository.find(active)
}

async function createUser (data) {
  const { user, file } = data
  const { password, email } = user
  if (!email) throw new Error('El email es obligatorio')
  if (!password) throw new Error('La contraseña es obligatorio')

  const emailLowerCase = email.toLowerCase()
  const result = await userRepository.findOne(emailLowerCase)

  if (result) throw new Error('El usuario ya existe')

  const dataUser = new User({
    ...user,
    email: emailLowerCase,
    active: false
  })

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)
  dataUser.password = hashPassword

  if (file.length > 0) {
    const imagePath = getImagePath(file)
    dataUser.avatar = imagePath
  }
  return await userRepository.registerUser(dataUser)
}

async function updateUser (id, data) {
  const validateUser = await getUser(id)
  if (!validateUser) throw new Error('El usuario no existe')

  const { user, file } = data
  const { email, password } = user
  if (email) {
    user.email = email.toLowerCase()
  }

  if (password && password !== '') {
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)
    user.password = hashPassword
  } else {
    delete user.password
  }

  if (file !== undefined) {
    if (file.length > 0) {
      const imagePath = getImagePath(file)
      user.avatar = imagePath
    }
  }

  return await userRepository.updateUser(id, user)
}

async function deleteUser (id) {
  const validateUser = await getUser(id)
  if (!validateUser) throw new Error('El usuario no existe')

  return await userRepository.deleteUser(id)
}

// async function hasRequiredFields (user) {
//   const { password, email } = user

//   if (!email) throw new Error('El email es obligatorio')
//   if (!password) throw new Error('La contraseña es obligatorio')

//   const emailLowerCase = email.toLowerCase()
//   const result = await userRepository.findOne(emailLowerCase)

//   if (result) throw new Error('El usuario ya existe')
// }
