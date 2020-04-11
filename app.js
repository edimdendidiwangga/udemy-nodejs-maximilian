const http = require('http');
const express = require('express');
 
const app = express();

app.use((req, res, next) => {
    console.log('in Middleware');
    next() 
});

app.use((req, res, next) => {
    console.log('in another Middleware');
});

const server = http.createServer(app);

server.listen(3000);