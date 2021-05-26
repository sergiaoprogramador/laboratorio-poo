const http = require('http');
// const dt = require('./time');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile("index.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    // let query = url.parse(req.url, true).query;
    // res.end("Login: " + query.login + " - " + "Senha: " + query.senha);
}).listen(8080);