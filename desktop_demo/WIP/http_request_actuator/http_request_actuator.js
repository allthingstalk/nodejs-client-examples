var smartliving = require('smartliving');

smartliving.credentials = require('./credentials');

smartliving.addAsset(
  "105",
  "HTTP Request Actuator", "A simple node.js 'http request actuator' for you to send HTTP messages from the SmartLiving Cloud",
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

smartliving.connect();