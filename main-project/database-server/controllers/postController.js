'use strict';

const Post = require('../models/postModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Post.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await Post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await Post.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
