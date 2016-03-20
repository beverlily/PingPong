var express = require('express'); //express class..?/module
var port = process.env.PORT || 3000; //heroku port is the first one
var app = express(); //express object

//app.get('/', function(request, response){
  //response.sendfile('layouts/main.html');
//});

app.use(require('./controllers/static'));

var server = app.listen(port, function(){
    console.log('Server listening on', port);
});
