//const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
//const { Student } = require('./student');

const Course = mongoose.model('Course', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  workLoad: {
    type: Number,
    required: true,
  },
  places: {
    type: Number,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  },
  students: [],
}));

exports.Course = Course;