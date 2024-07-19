var express = require('express');
var path = require('path');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var produtosRouter = require('./routes/produtos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/', produtosRouter);

app.use(function(req, res, next) {
  res.status(404).render('error', { message: 'Not Found' });
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
