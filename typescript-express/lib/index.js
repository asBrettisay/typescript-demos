"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Brett_1 = require("./src/Brett");
var app = express();
app.get('/api/stuff', function (req, res) {
    res.status(200).send('Hey this is working!!!!!');
});
app.get('/api/name', function (req, res) {
    res.status(200).send(Brett_1.default.sayName());
});
app.listen(3000, function () { return console.log('Listening on 3000'); });
