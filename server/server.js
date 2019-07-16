const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const server = require("http").Server(app);

const usersroutes = require('./routes/UsersRoutes');

server.listen(3001);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersroutes);

module.exports = app;
