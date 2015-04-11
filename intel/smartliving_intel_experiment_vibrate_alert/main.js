var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove object using GPIO pin 7
// NOTE: We're using the GroveLed UPM library which behaves exactly the same for vibration motor
var d7 = new grove.GroveLed(7);

var state = false; //Boolean to hold the state of pin

// Set up the Vibration motor actuator
led = smartliving.addAsset(
	"d7",
	"Vibrate notification",
	"A vibrate alert system",
	"bool",
	function(){
    	console.log("Vibration alert actuator enrolled")
	},function() {
    if(state){
      d7.on();
    }else{
      d7.off();
    }
    state = !state; //invert the pin state
  }
);

smartliving.connect();