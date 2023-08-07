'use strict';
const express = require('express');
const postController = require('../controllers/userpostController');

const postRoute = express.Router();

postRoute.route('/').get(postController.getAllPosts).post(postController.createPost);
postRoute.route('/:id').get(postController.getPost).patch(postController.updatePost).delete(postController.deletePost);

module.exports = postRoute;