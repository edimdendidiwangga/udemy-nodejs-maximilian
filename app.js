const express = require('express');
const bodyParser = require('body-parser');

const path = require('./utils/path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path('public')))

app.use('/admin',  adminData.routes); 
app.use(shopRouter);

app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found', pathUrl: ''  })
})

app.listen(3000);