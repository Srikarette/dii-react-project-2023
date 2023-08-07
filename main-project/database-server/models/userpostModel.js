'use strict';

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'write down something before post']
  },
  Date: {
    type: Date,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
