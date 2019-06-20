const express = require('express');
const router = express.Router();
const { Student } = require('../../models/student');

router.post('/', async (req, res) => {

    if (!req.body.name || !req.body.birth) {
        res.status(400).send("Missing fields");
        return;
    }

    let student;

    try {

        student = new Student({
            name: req.body.name,
            birth: req.body.birth,
        });
        await student.save();

    } catch (error) {
        res.status(400).send('Error: ' + error.message);
        return;
    }

    res.status(200).send(student);

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