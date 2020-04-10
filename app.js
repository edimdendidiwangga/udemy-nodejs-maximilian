const http = require('http');

function rqListener(req, res) {

}

const server = http.createServer((req, res) => {
    console.log('req', req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Welcome form my node js</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);