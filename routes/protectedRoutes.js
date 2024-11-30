const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.get('/admin', authMiddleware, authorize(['Admin']), (req, res) => {
    res.send('Welcome Admin!');
});

router.get('/user', authMiddleware, authorize(['User', 'Admin']), (req, res) => {
    res.send('Welcome User!');
});

module.exports = router;
