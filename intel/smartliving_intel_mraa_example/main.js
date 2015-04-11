var smartliving = require('smartliving');
var mraa = require('mraa'); //Wrapper for GPIO Pins

var a0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var d8 = new mraa.Gpio(8); //LED hooked up to digital pin 4 

d8.dir(mraa.DIR_OUT); //set the gpio direction to output
var state = false; //Boolean to hold the state of Led

smartliving.credentials = require('./credentials');

// Set up the Potentiometer Sensor
smartliving.addAsset(
	"3",
	"Thermo-reactor turbine speed controller",
	"Controls the main turbine of the nuclear reactor, using a good ol' potentiometer",
	"int",
	function(){
    	console.log("Turbine potentiometer controller enrolled")
	}
);

// Set up the LED Actuators
smartliving.addAsset(
	"8",
	"Missile launcher",
	"Fires missiles at incoming spacecraft, and also a neat LED for some visual feedback...",
	"bool",
	function(){
    	console.log("Missile LED enrolled")
	},
	function() {
 		d8.write(state?0:1); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
 		state = !state; //invert the ledState
	}
);

smartliving.connect();

setInterval(function(){
    var analogValue = a0.read(); //read the value of the analog pin
    smartliving.send(analogValue, "3")
}, 5000);