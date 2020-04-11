const express = require('express');
const router = express.Router();
const path = require('../utils/path')

router.get('/add-product', (req, res, next) => {
    res.sendFile(path('views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
});

module.exports = router