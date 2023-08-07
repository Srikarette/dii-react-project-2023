const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'A user must have a username'],
        unique: true,
    },
    password: {
        type: String,
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
        default: false
    },
    isSubscribe: {
        type: Boolean,
        default: false
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
