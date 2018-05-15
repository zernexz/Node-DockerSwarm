var http = require('http');
var os = require('os');
console.log('Heyyy.');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>I'm ${os.hostname()}</h1>`);
}).listen(8080);
console.log(' End ... ');
