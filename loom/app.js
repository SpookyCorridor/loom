var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport'); 
var expressSession = require('express-session'); 
require('./app_server/models/db'); 
var flash = require('connect-flash');
var cors = require('cors');
var routes = require('./app_server/routes/index');
var users = require('./app_server/routes/users');
var initPassword = require('./app_server/passport/init');
initPassword(passport);
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);  
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
//socketio variables 
var iostate = iostate || {}; 
var connected = 0; 
var people = {}; 
var history = {};
//sockets
io.on('connection', function (client) {

    connected +=1; 
    people[client.id] = 'user'+connected;
    client.emit('new', people[client.id] + 'has connected');

  client.on('change', function (data) {
 
    client.broadcast.emit('update', data); 
  
  });

  client.on('disconnect', function() {
    delete people[client.id]; 
  })
});

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({secret           : 'shhitsasecret',
                        saveUninitialized: true,
                        resave           : true}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 
app.use(cors()); 

app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
