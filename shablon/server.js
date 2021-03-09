const http = require('http');
const fs = require('fs');

const hostname = '192.168.30.122'; // IP 
const port = 4000; // порт

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url == '/') {
        url = '/index'
    }

    // console.log(url);
    if (url != '/favicon.ico') {

        if (req.url.endsWith('.css')) {
            let cssFile = req.url.slice(1);

            fs.readFile(cssFile, (err, data) => {
                if (err) throw err;

                res.setHeader('Content-Type', 'text/css');
                res.statusCode = 200;
                res.write(data);
                res.end()
            })
        }
        else if (req.url.endsWith('.js')) {
            let jsFile = req.url.slice(1);

            fs.readFile(jsFile, (err, data) => {
                if (err) throw err;

                res.setHeader('Content-Type', 'text/javascript');
                res.statusCode = 200;
                res.write(data);
                res.end()
            })
        }
        else {
            fs.readFile(url.substr(1, url.length) + '.html', function (err, data) {
                if (!err) {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html');
                    fs.readFile('header.html', function (err, data_header) {
                        data = data.toString().replace("{{name}}", data_header.toString());
                        res.write(data)
                        res.end();
                    })
                } else {
                    fs.readFile('404.html', function (err, data) {
                        res.statusCode = 400;
                        res.setHeader('Content-Type', 'text/html');
                        res.write(data)
                        res.end();
                    }
                    );
                }
            })

        }
    }
}
);



server.listen(port, hostname, () => {
    console.log('Server is running!')
})