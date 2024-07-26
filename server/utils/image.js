function getImagePath (file) {
  const fileSplit = file[0].path.split('\\')
  return `${fileSplit[1]}/${fileSplit[2]}`
}

module.exports = {
  getImagePath
}
