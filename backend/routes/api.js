const express = require('express');
const router = express.Router();

const { getFullPokenea } = require('../controllers/full');
const { getRawPokenea } = require('../controllers/raw');
const { getAllPokenea } = require('../controllers/all');

router.get('/full', (req, res) => {
    res.json(getFullPokenea());
});

router.get('/raw', (req, res) => {
    res.json(getRawPokenea());
});

router.get('/all', (req, res) => {
    res.json(getAllPokenea());
});


module.exports = router;
