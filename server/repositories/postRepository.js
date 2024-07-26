const Post = require('../models/post')

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  getPostByPath,
  deletePost
}

async function createPost (post) {
  return await post.save()
}

async function getPosts (page, limit) {
  const options = {
    page,
    limit
  }
  return await Post.paginate({}, options)
}

async function getPostById (id) {
  return await Post.findOne({ _id: id })
}

async function updatePost (id, post) {
  return await Post.findByIdAndUpdate({ _id: id }, post, {
    new: true
  })
}

async function getPostByPath (path, id) {
  if (id) {
    return await Post.find({
      _id: { $ne: id },
      path
    })
  } else {
    return await Post.find({ path })
  }
}

async function deletePost (id) {
  return await Post.findByIdAndDelete(id)
}
