'use strict';

const userModel = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json({
      status: 'Success',
      results: users.length,
      data: users,
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
    const user = await userModel.create(req.body);

    res.status(200).json({
      status: 'Success',
      message: user,
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
    const user = await userModel.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      message: user,
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
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: { user },
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
    await userModel.findByIdAndDelete(req.params.id);

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
