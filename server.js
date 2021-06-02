const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const formidable = require('formidable');

http.createServer(function(req, res) {
    if (req.url == '/enviar/arquivo') {
        const form = formidable({ multiples: true });

        form.parse(req, (err, fields, files) => {
            console.log(files.files, fields);
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(JSON.stringify({ fields, files }, null, 2));
        })

        return;
    } else {
        fs.readFile("formFile.html", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
}).listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
})