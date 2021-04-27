'use strict'

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '192.168.30.156'; // IP 
const port = 4000; // порт

const server = http.createServer((req, response) => {
    let url = req.url;
    if (url == '/') {
        url = '/index'
    }
    types = { '.css': 'text/css', 'jpg': 'image/jpg' };

    if (url != '/favicon.ico') {

        if (url.includes('.')) {
            let ext = path.extname(url);
            if (ext in types) {
                response.statusCode = 200;
                response.setHeader('Content-type', types[ext]);
                fs.readFile('./' + url, function (err, data) {
                    if (!err) {
                        response.write(data);
                        response.end();
                    } else {
                        console.log(err);
                        response.end();
                    }
                })
            }
        }
        else {
            // /html/index.html
            // {'j.html':[1,2,3,4]}
            fs.readFile(url.substr(1, url.length) + '.html', function (err, data) {
                if (!err) {
                    response.statusCode = 418;
                    response.setHeader('Content-Type', 'text/html');
                    fs.readFile('./html/header.html', 'utf8', (err, header) => {
                        data = data.replace('{{ header }}', header)
                        fs.readFile('./html/header.html', 'utf8', (err, header) => {
                            data = data.replace('{{ header }}', header)
                            response.write(data);
                            response.end();
                        })
                    })

                } else {
                    fs.readFile('404.html', function (err, data) {
                        response.statusCode = 400;
                        response.setHeader('Content-Type', 'text/html');
                        response.write(data)
                        response.end();
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

/*
1. Определить ip и порт в переменные
2. создаешь сервер
3. Включаешь прослушку
4. проверяешь, все ли ок

5. внутри сервера создаешь условие - ЕСЛИ НЕ ФАВИКОНКА
6. пробуешь по адресу, по которому перешел пользователь, асинхронно открыть html файл
7. если нет ошибки - читаешь асинхронно файл и пишешь через write в ответ
8. иначе - читаешь файл 404.html
*/