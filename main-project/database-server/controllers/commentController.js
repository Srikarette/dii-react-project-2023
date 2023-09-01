const Comment = require('../models/commentModel');


exports.getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({
      status: 'success',
      results: comments.length,
      data: comments,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error fetching comments',
    });
  }
};

exports.getComment = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        status: 'error',
        message: 'Comment not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching comment',
    });
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const { postId, content } = req.body;
    const comment = await Comment.create({ postId, content });
    res.status(201).json({
      status: 'success',
      data: comment,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error creating comment',
    });
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const { content } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({
        status: 'error',
        message: 'Comment not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: updatedComment,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating comment',
    });
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    await Comment.findByIdAndDelete(commentId);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error deleting comment',
    });
  }
};
