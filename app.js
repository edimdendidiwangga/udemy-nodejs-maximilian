const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')
const path = require('./utils/path')

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path('public')))

app.use('/admin',  adminData.routes); 
app.use(shopRouter);

app.use((req, res, next) => {
    res.render('404')
})

app.listen(3000);