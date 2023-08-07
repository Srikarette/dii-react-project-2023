'use strict';
const express = require('express');
const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.route('/').get(userController.getAllUsers).post(userController.createUser);
userRoute.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = userRoute;
