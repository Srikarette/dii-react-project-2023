'use strict';

const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const tours = await User.find();

    res.status(200).json({
      status: 'Success',
      results: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const tour = await User.create(req.body);

    res.status(200).json({
      status: 'Success',
      message: tour,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const tour = await User.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      message: tour,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const tour = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: { tour },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
      message: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

// userController.js
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username and password match a user in your database
    const user = await User.findOne({ username, password });

    if (!user) {
      // If no user is found, return an error response
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If the user is found and authenticated, you can send a success response
    // You might also generate a token for the user here if you're implementing JWT authentication.

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

