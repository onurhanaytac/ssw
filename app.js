const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const util = require('util');
const fs = require('fs');
const _ = require('lodash');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');

/* routes */
const routes = require('./routes');
const database = require('./routes/database');
const user = require('./routes/user');
/* end of routes */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// db connection
mongoose.connect(config.database, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Succesfully connected to', config.database);
    }
});

// routes
app.use('/database', database);
app.use('/user', user);
app.get('/*', routes.index);

// start tasks
require('./tasks');

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
    });
});


module.exports = app;
