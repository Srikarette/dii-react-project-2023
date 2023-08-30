// postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const postRoute = express.Router();

postRoute.route('/').get(postController.getAllPosts).post(postController.createPost);
postRoute.route('/:id').get(postController.getPost).patch(postController.updatePost).delete(postController.deletePost);
postRoute.patch('/:id/like', postController.likePost).patch('/:id/unlike', postController.unlikePost);

postRoute.patch('/:id/bookmark', postController.toggleBookmark);

module.exports = postRoute;
