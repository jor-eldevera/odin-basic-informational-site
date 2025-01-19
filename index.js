let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let pageRequested = q.pathname;

    // Based on what page is requested,
    // write the contents of the corresponding .html file to the response,
    // then return the response
    if (pageRequested === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
        });
    } else if (pageRequested === "/about") {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
        });
    } else if (pageRequested === "/contact-me") {
        fs.readFile("contact-me.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
        });
    }
    else {
        fs.readFile("404.html", (err, data) => {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);