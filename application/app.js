var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    app = express(),
    dot = require('express-dot-engine'),
    routes = require('./routes'),
    localization = require('./middle/localization');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dot');
app.enable('view cache');
app.engine('dot', dot.__express);
app.use(localization);
app.use('/ftp',express.static(path.join(__dirname, 'ftp')));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/libs',express.static(path.join(__dirname, 'libs')));
app.use('/img',express.static(path.join(__dirname, 'img')));

app.use('/', routes);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('not-found', { });
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;