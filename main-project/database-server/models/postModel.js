'use strict';

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'A user must write content before post'],
  },
  formUser: {
    type: String,
  },
  like:{
    type: Number,
    default: 0,
  },
  postDate: {
    type: Date,
  },
  isBookMark: {
    type: Boolean,
    default: false,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
