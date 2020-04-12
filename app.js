const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')
const path = require('./utils/path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path('public')))

app.use('/admin', adminRoutes); 
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3000);