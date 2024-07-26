const postServices = require('../services/postServices')

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getPost
}

async function createPost (req, res) {
  try {
    const data = { post: req.body, file: req.files }
    const result = await postServices.createPost(data)
    res.status(201).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function getPosts (req, res) {
  try {
    const { page = 1, limit = 1 } = req.query
    const result = await postServices.getPosts(page, limit)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function updatePost (req, res) {
  try {
    const { id } = req.params
    const postData = { post: req.body }
    if (req.files) {
      postData.file = req.files
    }
    const result = await postServices.updatePost(id, postData)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function deletePost (req, res) {
  try {
    const { id } = req.params
    const result = await postServices.deletePost(id)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

async function getPost (req, res) {
  try {
    const { path } = req.params
    const result = await postServices.getPostByPath(path)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
