"use strict";

var asyncForEach = require('./');
var request = require('request');

var urls = [
    'http://www.yandex.ru/',
    'http://www.mail.ru/',
    'http://www.google.ru/'
];

var totalSize = 0;

asyncForEach(urls, function(element, index, done) {
    request(element, function(error, res) {
        if (error || !res || !res.headers) {
            console.error(element + " is not available");
            done();
            return;
        }
        console.log('loaded ' + res.headers['content-length'] + ' bytes from ' + element);
        totalSize += parseInt(res.headers['content-length']);
        done();
    });
}, function() {
    console.log('total loaded: ' + totalSize + ' bytes.');
});
