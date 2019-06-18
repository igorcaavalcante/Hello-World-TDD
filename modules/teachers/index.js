const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    //CREATE
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