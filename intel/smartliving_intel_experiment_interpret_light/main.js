var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove button object using GPIO pin 8
var a0 = new grove.GroveLight(0);

// Set up the push button sensor
light = smartliving.addAsset(
	"a0",
	"Lux sensor",
	"Reads light in lux",
	"int",
	function(){
    	console.log("Light sensor enrolled")
	}
);

smartliving.connect();

setInterval(function(){
  smartliving.send(a0.value(), "a0");
},5000);