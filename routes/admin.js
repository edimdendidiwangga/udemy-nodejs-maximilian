const express = require('express');
const router = express.Router();
const path = require('../utils/path')

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path('views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/')
});

exports.routes = router;
exports.products = products;