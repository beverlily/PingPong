//server
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
  response.sendfile('layouts/main.html');
});

router.use(express.static('assets')); //assets is accessible for html

module.exports = router; //router object is exported ... always last line
