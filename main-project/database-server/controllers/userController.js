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

exports.updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id); // Assuming you have user authentication middleware

    // Check if the old password matches the current password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: 'error', message: 'Old password is incorrect' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ status: 'success', message: 'Password updated successfully' });
  } catch (error) {
    console.error('Password update error:', error);
    res.status(500).json({ status: 'error', message: 'An error occurred while updating the password' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    
    // Send the user's data including userId to the client
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

exports.checkUsernameAvailability = async (req, res) => {
  try {
    const { username } = req.body;

    // Query your database to check if the username already exists
    const user = await User.findOne({ username });

    if (user) {
      // Username is already in use
      return res.status(400).json({ message: 'Username is already in use' });
    }

    // Username is available
    return res.status(200).json({ message: 'Username is available' });
  } catch (error) {
    console.error('Error checking username availability:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


