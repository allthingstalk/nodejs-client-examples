var allthingstalk = require('allthingstalk');
var mraa = require('mraa'); //Wrapper for GPIO Pins

var a0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var d4 = new mraa.Gpio(4); //LED hooked up to digital pin 4 

d4.dir(mraa.DIR_OUT); //set the gpio direction to output
var state = false; //Boolean to hold the state of Led

allthingstalk.credentials = require('./credentials');

// Set up the Potentiometer Sensor
allthingstalk.addAsset(
	"0",
	"Thermo-reactor turbine speed controller",
	"Controls the main turbine of the nuclear reactor, using a good ol' potentiometer",
	"int",
	function(){
    	console.log("Turbine potentiometer controller enrolled")
	}
);

// Set up the LED Actuators
allthingstalk.addAsset(
	"4",
	"Missile launcher",
	"Fires missiles at incoming spacecraft, and also a neat LED for some visual feedback...",
	"bool",
	function(){
    	console.log("Missile LED enrolled")
	},
	function() {
 		d4.write(state?0:1); //if state is true then write a '1' (high) otherwise write a '0' (low)
 		state = !state; //invert the ledState
	}
);

allthingstalk.connect();

setInterval(function(){
    var value = a0.read(); //read the value of the analog pin
    allthingstalk.send(value, "0")
}, 5000);