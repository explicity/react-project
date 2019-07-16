const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const app = express();
const server = require("http").Server(app);

const usersroutes = require('./routes/UsersRoutes');
const loginroutes = require('./routes/LoginRoutes');

server.listen(3001);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/users', usersroutes);
app.use('/login', loginroutes);

module.exports = app;
