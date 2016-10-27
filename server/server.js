const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.db.setting());
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');

  app.listen(port, function(){
    console.log('listening on', port);
  })

  app.use('/api/seats', require('./routes/seats'));
  app.use('/api/users', require('./routes/users'));

  app.use(express.static(__dirname + '/public'));

});

