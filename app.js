var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function(request, response) {
  response.send('OK');
});

app.get('/cities', function(request, response){
  var cities = ['Lotopia','Caspiana','Indigo'];
  response.json(cities);
});

app.post('/cities', function(request, response){
 response.sendStatus(201);
});
module.exports = app;
