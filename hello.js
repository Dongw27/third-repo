/*
const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello World');
    res.end();
}).listen(8080, function() {
    console.log('server is running at localhost:8080')
});
*/

const fs = require('fs');
const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extends: true}));

app.use(express.static('public'));
let router = require('./router/base')(app, fs);
let corona_router = require('./router/corona')(app, axios);

app.listen(8080, function() {
    console.log('Express server is running localhost:8080');
});
