const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Course } = require('../../models/course');

router.post('/', async (req, res) => {

    if (!req.body.title || !req.body.workLoad || !req.body.teacher || !req.body.places){
        res.status(400).send('Missing fields');
        return;
    }

    if (!mongoose.Types.ObjectId.isValid(req.body.teacher)){
        res.status(400).send('Invalid teacher');
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