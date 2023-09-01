'use strict';

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'A comment must have content'],
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'A comment must be associated with a post'],
  },
  // Add any other fields you need for comments
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
