//const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
//const { Course } = require('./course');

const Teacher = mongoose.model('Teacher', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    courses: [],
}));

exports.Teacher = Teacher;