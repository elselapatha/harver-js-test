const fs = require('fs')
const path = require('path');

module.exports = {
    render: (res, requestPath) => {
        const extname = path.extname(requestPath)
        var contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
                contentType = 'image/png';
                break;
        }

        fs.readFile(requestPath, (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 - file not found');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data, 'utf-8');
            }

        })
    },
    json: (res, content) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(content), 'utf-8');
    },

}