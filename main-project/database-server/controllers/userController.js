'use strict';

const User = require('../models/userModel');

exports.getAllTours = async (req, res) => {
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

exports.createTour = async (req, res) => {
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

exports.getTour = async (req, res) => {
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

exports.updateTour = async (req, res) => {
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

exports.deleteTour = async (req, res) => {
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
