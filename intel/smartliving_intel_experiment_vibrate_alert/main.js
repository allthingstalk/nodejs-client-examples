var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove object using GPIO pin 7
// NOTE: We're using the GroveLed UPM library which behaves exactly the same for vibration motor
var d7 = new grove.GroveLed(7);

// Set up the Vibration motor actuator
led = smartliving.addAsset(
	"d7",
	"Vibrate notification",
	"A vibrate alert system",
	"bool",
	function(){
    	console.log("Vibration alert actuator enrolled")
	},function(command) {
    if(command=="true"){
      d7.on();
    }else{
      d7.off();
    }
  }
);

smartliving.connect();