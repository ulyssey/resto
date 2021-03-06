var express = require('express');
var expressHbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var orders = require('./routes/orders');

var app = express();

var i18n = require('./data/i18n');

var max_id = i18n.articles_related.length - 1;

// view engine setup
app.engine('.hbs', expressHbs({
  defaultLayout: 'default',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/orders', orders);
app.use('/', index);

//statics files:
app.get('/js/isNumberLessThan3Caracters.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/js/isNumberLessThan3Caracters.js'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
