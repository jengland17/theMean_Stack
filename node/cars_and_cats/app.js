const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {

    if (request.url === '/cars') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/cars/new') {
        fs.readFile('views/form.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/images/GTR.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/GTR.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/Camaro.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Camaro.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/elantra.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/elantra.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/cat1.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.png', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/cat2.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/images/cat3.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat3.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }

    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});

server.listen(7077);
console.log("listening on port 7077");