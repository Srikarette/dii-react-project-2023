const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  uname: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  },
  profileDescription: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  profileBgPic: {
    type: String,
  },
  isFriend: {
    type: Boolean,
  },
  isSubscribe: {
    type: Boolean,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
