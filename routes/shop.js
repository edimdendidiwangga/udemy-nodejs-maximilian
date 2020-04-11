const express = require('express');
const path = require('../utils/path')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path('views', 'shop.html'))
});

module.exports = router