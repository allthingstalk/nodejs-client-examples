var smartliving = require('smartliving');
var mraa = require('mraa'); //Wrapper for GPIO Pins

var a0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var d8 = new mraa.Gpio(8); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
d8.dir(mraa.DIR_OUT); //set the gpio direction to output
var ledState = false; //Boolean to hold the state of Led

smartliving.credentials = require('./credentials');

// Set up the Potentiometer Sensor
smartliving.addAsset(
	"3",
	"Thermoreactor turbine controller",
	"Controls the main turbine of the nuclear reactor, using a good ol' potentiometer",
	"int",
	function(){
    	console.log("Turbine Potiometer controller enrolled")
	}
);

// Set up the LED Actuators
smartliving.addAsset(
	"2",
	"Missle launcher",
	"Fires 10xD missles at incoming spacecraft, and also a neat LED for some visual feedback...",
	"bool",
	function(){
    	console.log("Missle LED enrolled")
	},
	function() {
 		d8.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
 		ledState = !ledState; //invert the ledState
	}
);

smartliving.connect();

setInterval(function(){
    var analogValue = a0.read(); //read the value of the analog pin
    smartliving.send(analogValue, "3")
},1000);