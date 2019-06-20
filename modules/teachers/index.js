const express = require('express');
const router = express.Router();
const { Teacher } = require('../../models/teacher');

router.post('/', async (req, res) => {

    if (!req.body.name) {
        res.status(400).send("Missing fields");
        return;
    }

    let teacher;

    try {

        teacher = new Teacher({
            name: req.body.name,
        });
        await teacher.save();

    } catch (error) {
        res.status(400).send('Error: ' + error.message);
        return;
    }

    res.status(200).send(teacher);

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