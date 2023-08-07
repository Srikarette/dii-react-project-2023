'use strict';

const postModel = require('../models/userpostModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    res.status(200).json({
      status: 'Success',
      results: posts.length,
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await postModel.create(req.body);

    res.status(200).json({
      status: 'Success',
      message: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      message: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await postModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: { post },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await postModel.findByIdAndDelete(req.params.id);

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
