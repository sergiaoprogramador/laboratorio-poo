const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile("usuario.json", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(data);
        return res.end();
    })
}).listen(8080);