var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.loadCredentials();

// Create the Grove LED object using GPIO pin 2
var d8 = new grove.GroveLed(8);
var a0 = new grove.GroveRotary(0);

var ledState = false; //Boolean to hold the state of Led

// Set up the Potentiometer Sensor
pot = smartliving.addAsset(
	"d8",
	"Thermoreactor turbine controller",
	"Controls the main turbine of the nuclear reactor, using a good ol' potentiometer",
	"int",
	function(){
    	console.log("Turbine Potentiometer controller enrolled")
	}
);

// Set up the LED Actuators
led = smartliving.addAsset(
	"a0",
	"Missle launcher",
	"Fires 10xD missles at incoming spacecraft, and also a neat LED for some visual feedback...",
	"bool",
	function(){
    	console.log("Missle LED enrolled")
	},
	function() {
 		if(ledState){
            led.on();
 		}else{
 	        led.off();
 		}
 		ledState = !ledState; //invert the ledState
	}
);

smartliving.connect();

setInterval(function(){
    var abs = a0.abs_value();
    var absdeg = a0.abs_deg();
    var absrad = a0.abs_rad();

    var rel = a0.rel_value();
    var reldeg = a0.rel_deg();
    var relrad = a0.rel_rad();

    //write the knob value to the console in different formats
    console.log("Abs: " + abs + " " + Math.round(parseInt(absdeg)) + " " + absrad.toFixed(3));
    console.log("Rel: " + rel + " " + Math.round(parseInt(reldeg)) + " " + relrad.toFixed(3));

    smartliving.send(Math.round(parseInt(absdeg)), pot)
},5000);