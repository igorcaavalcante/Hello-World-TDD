//const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
//const { Course } = require('./course');

const Student = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    birth: {
        type: Date,
        required: true,
    },
    courses: [],
}));

exports.Student = Student;