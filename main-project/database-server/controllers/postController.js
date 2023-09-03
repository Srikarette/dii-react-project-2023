'use strict';

const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  try {
    // Fetch posts and populate the 'userId' field with user documents
    const posts = await Post.find().populate('userId');

    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};


exports.createPost = async (req, res) => {
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

exports.getPost = async (req, res) => {
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

exports.updatePost = async (req, res) => {
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

exports.deletePost = async (req, res) => {
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

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { like: 1 } },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { like: -1 } },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
exports.toggleBookmark = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    post.isBookMark = !post.isBookMark; // Toggle the bookmark status
    await post.save();
    
    return res.status(200).json({ message: 'Bookmark status toggled', data: post });
  } catch (error) {
    return res.status(500).json({ message: 'Error toggling bookmark status', error });
  }
};

