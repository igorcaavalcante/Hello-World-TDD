const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Course } = require('../../models/course');
const { Teacher } = require('../../models/teacher');

router.post('/', async (req, res) => {

    if (!req.body.title || !req.body.workLoad || !req.body.teacher || !req.body.places){
        res.status(400).send('Missing fields');
        return;
    }

    const teacher = Teacher.findOne({
        'id': req.body.teacher,
    });

    if (!teacher) {
        res.status(404).send('Teacher not found');
        return;
    }

    let course;

    try {
        
        course = new Course({
            title: req.body.title,
            workLoad: req.body.workLoad,
            teacher: req.body.teacher,
            places: req.body.places
        });
        await course.save();
        
    } catch (error) {
        res.status(400).send('Error: ' + error.message);
        return;
    }

    res.status(200).send(course);
    
});

router.get('/', (req, res) => {
    //GET ALL
});

router.get('/:id', (req, res) => {
    //GET ONE
});

router.patch('/:id', (req, res) => {
    //UPDATE ONE
});

router.delete('/:id', (req, res) => {
    //DELETE ONE
});

module.exports = router;