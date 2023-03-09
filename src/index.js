"use strict";

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const post = 3000;

const route = require('./routes');
const db = require('./config/db');
//static file (img, video)
app.use(express.static(path.join(__dirname, 'public')));

// midlewave
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//XMLHttpRequest, fetch, axios

//HTTP Trigger
app.use(morgan('combined'));

//Template engine

app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes inint
route(app);

//Connect to DB
db.connect();


app.listen(post, () => console.log (`Đã kết nối thành công http://localhost:${post}`));