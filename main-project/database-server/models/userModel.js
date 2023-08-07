'use strict';

const mongoose = require('mongoose');

const toursSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A user must have a username'],
    unique: true,
  },
  password: {
    type: String, // Change the type to String
    required: [true, 'A user must have a password'],
    default: '0', // Set the default as a string value, e.g., '0'
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

const User = mongoose.model('User', toursSchema);

module.exports = User;
