//server
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
  response.sendfile('layouts/main.html');
});

module.exports = router; //router object is exported
