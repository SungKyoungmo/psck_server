var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var client = require('./routes/client');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/client',client);
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

//Minwoo
var socket_http = require("http");
var socket_server = socket_http.createServer(function(req, res) {});
var socketio = require('socket.io');
var io = socketio.listen(socket_server);
io.on('connection',function(client){
  client.write('hi');
  client.emit('connection', 'hi');
  console.log('Message from client :');
});
//mongodb
var mongoose = require('mongoose');

// ......
// [ CONFIGURE mongoose ]
// CONNECT TO MONGODB SERVER

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
const yaml = require('js-yaml');
const fs = require('fs');

try {
  const config = yaml.safeLoad(fs.readFileSync('setting.yaml', 'utf8'));
  const indentedJson = JSON.stringify(config, null, 4);
  var temp = "mongodb://"+config.server.id+":"+config.server.pw+"@"+config.server.host+":"+config.server.mongodb_port+"/"+config.server.mongodb_name;
  mongoose.connect(temp);
} catch (e) {
  console.log(temp);
}

var tep21;