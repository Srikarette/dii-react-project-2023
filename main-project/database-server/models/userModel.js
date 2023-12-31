'use strict';

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A user must have a username'],
  },
  password: {
    type: String, // Change the type to String
    required: [true, 'A user must have a password'],
  },
  profileDescription: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  profileBgPicture: {
    type: String,
  },
  isFriend: {
    type: Boolean,
    default: false,
  },
  isSubscribe: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
