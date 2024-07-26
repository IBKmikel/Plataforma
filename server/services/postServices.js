const postRepository = require('../repositories/postRepository')
const Post = require('../models/post')
const { getImagePath } = require('../utils/image')

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByPath
}

async function createPost (data) {
  const { post, file } = data

  const resultPath = await getPostByPath(post.path)
  if (resultPath.length > 0) throw new Error('El path ya existe')

  if (file.length === 0) throw new Error('La miniatura es obligatoria')

  const imagePath = getImagePath(file)
  post.miniature = imagePath
  post.createdAt = new Date()

  const dataPost = new Post(post)
  return await postRepository.createPost(dataPost)
}

async function getPosts (page, limit) {
  return await postRepository.getPosts(page, limit)
}

async function getPostById (id) {
  return await postRepository.getPostById(id)
}

async function updatePost (id, postData) {
  const validatePost = await getPostById(id)
  if (!validatePost) throw new Error('El post no existe')

  const { post, file } = postData

  const resultPath = await getPostByPath(post.path, id)

  if (resultPath.length > 0) throw new Error('El path ya existe')

  if (file !== undefined) {
    if (file.length > 0) {
      const imagePath = getImagePath(file)
      post.miniature = imagePath
    } else {
      delete post.miniature
    }
  }

  return await postRepository.updatePost(id, post)
}

async function deletePost (id) {
  const validatePost = await getPostById(id)
  if (!validatePost) throw new Error('El post no existe')

  return await postRepository.deletePost(id)
}

async function getPostByPath (path, id) {
  return await postRepository.getPostByPath(path, id)
}
