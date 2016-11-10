var allthingstalk = require('allthingstalk');
var grove = require('jsupm_grove');

allthingstalk.credentials = require('./credentials');

// Create the Grove Light sensor object using GPIO pin a1
var a1 = new grove.GroveLight(1);

// Set up the push button sensor
light = allthingstalk.addAsset(
	"a1",
	"Lux sensor",
	"Reads light in lux",
	"int",
	function(){
    	console.log("Light sensor enrolled")
	}
);

allthingstalk.connect();

setInterval(function(){
  console.log(a1.name() + " raw value is " + a1.raw_value() +
            ", which is roughly " + a1.value() + " lux");
	
  allthingstalk.send(a1.value(), "a1");
},5000);