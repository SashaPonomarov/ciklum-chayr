const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.db.setting());
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

// passport config
var Account = require('./models/Account.model');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');

  app.listen(port, function(){
    console.log('listening on', port);
  })

  app.use(express.static(__dirname + '/public'));
  app.use('/api', require('./routes/api'));

});

