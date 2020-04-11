const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add', (req, res, next) => {
    res.send('<form action="product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>')
});


app.post('/product', (req, res, next) => {
    console.log(req.body)
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello from express</h1>')
});

const server = http.createServer(app);

server.listen(3000);