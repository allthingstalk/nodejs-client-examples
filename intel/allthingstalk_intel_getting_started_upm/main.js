var allthingstalk = require('allthingstalk');
var grove = require('jsupm_grove');

allthingstalk.credentials = require('./credentials');

// Create the Grove LED object using GPIO pin 4
var d4 = new grove.GroveLed(4);
var a0 = new grove.GroveRotary(0);

// Set up the Potentiometer Sensor
pot = allthingstalk.addAsset(
	"a0",
	"Thermo-reactor turbine speed controller",
	"Controls the main turbine of the nuclear reactor, using a good ol' potentiometer",
	"int",
	function(){
    	console.log("Turbine potentiometer controller enrolled")
	}
);

// Set up the LED Actuators
led = allthingstalk.addAsset(
	"d4",
	"Missile launcher notification",
	"Fires missiles at incoming spacecraft, and also a neat LED for some visual feedback...",
	"bool",
	function(){
    	console.log("Missile notification LED enrolled")
	},
	function(command) {
 		if(command=="true"){
            d4.on();
 		}else{
 	        d4.off();
 		}
	}
);

allthingstalk.connect();

setInterval(function(){
    //Write the knob value to the console in different formats
    var abs = a0.abs_value();
    var absdeg = a0.abs_deg();
    var absrad = a0.abs_rad();

    var rel = a0.rel_value();
    var reldeg = a0.rel_deg();
    var relrad = a0.rel_rad();

    console.log("Abs: " + abs + " " + Math.round(parseInt(absdeg)) + " " + absrad.toFixed(3));
    console.log("Rel: " + rel + " " + Math.round(parseInt(reldeg)) + " " + relrad.toFixed(3));

    allthingstalk.send(abs, "a0");
},1000);