const express = require('express');
const path = require('../utils/path')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    // res.sendFile(path('views', 'shop.html'))
    res.render('shop')
});

module.exports = router