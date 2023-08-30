const express = require('express');
const commentController = require('../controllers/commentController');

const commentRouter = express.Router();

commentRouter.route('/').get(commentController.getAllComments).post(commentController.createComment);
commentRouter.route('/:id').get(commentController.getComment).patch(commentController.updateComment).delete(commentController.deleteComment);

module.exports = commentRouter;
