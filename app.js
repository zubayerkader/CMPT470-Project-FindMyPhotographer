var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

const dotenv = require('dotenv').config();

const cors = require('cors');
var corsOptions = {
  origin:  process.env.FRONTEND_URL, //"http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept"
};

var app = express();

app.use(cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/indexRoute');
var usersRouter = require('./routes/usersRoute');
var clientsRouter = require('./routes/clientsRoute');
var photographersRouter = require('./routes/photographersRoute');
var bookingsRouter = require('./routes/bookingsRoute');
var profilesRouter = require('./routes/profilesRoute');
var reviewsRouter = require('./routes/reviewsRoute');
var imageRouter = require('./routes/imagesRoute');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/photographers', photographersRouter);
app.use('/bookings', bookingsRouter);
app.use('/profiles', profilesRouter);
app.use('/reviews', reviewsRouter);
app.use('/images', imageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
