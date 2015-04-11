var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove Light sensor object using GPIO pin a1
var a1 = new grove.GroveLight(1);

// Set up the push button sensor
light = smartliving.addAsset(
	"a1",
	"Lux sensor",
	"Reads light in lux",
	"int",
	function(){
    	console.log("Light sensor enrolled")
	}
);

smartliving.connect();

setInterval(function(){
  smartliving.send(a1.value(), "a1");
},5000);