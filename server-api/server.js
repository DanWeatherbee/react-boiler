var express = require('express'),
  appApi = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');


appApi.use(bodyParser.urlencoded({ extended: true }));
appApi.use(bodyParser.json());
appApi.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(appApi); //register the route


appApi.listen(port);


console.log('todo list RESTful API server started on: ' + port);