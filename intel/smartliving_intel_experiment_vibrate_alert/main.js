var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove object using GPIO pin 8
// NOTE: We're using the GroveLed UPM library which behaves exactly the same for vibration motor
var d8 = new grove.GroveLed(8);

var d8State = false; //Boolean to hold the state of pin

// Set up the Vibration motor actuator
led = smartliving.addAsset(
	"d8",
	"Vibrate notification",
	"A vibrate alert system",
	"bool",
	function(){
    	console.log("Vibration alert actuator enrolled")
	},function() {
    if(d8State){
      d8.on();
    }else{
      d8.off();
    }
    d8State = !d8State; //invert the pin state
  }
);

smartliving.connect();