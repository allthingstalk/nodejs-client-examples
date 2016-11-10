var allthingstalk = require('allthingstalk');

allthingstalk.credentials = require('./credentials');

allthingstalk.addAsset(
  "105",
  "HTTP Request Actuator", "A simple node.js 'http request actuator' for you to send HTTP messages from the allthingstalk Cloud",
  "string",
  function(){
  	console.log("HTTP Actuator enrolled"),
  },
  function(req){
  request(req, function(){
  	console.log("HTTP Request sent");
  } || function() {});
  }
 );

allthingstalk.connect();