var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove LED object using GPIO pin 8
var d8 = new grove.GroveLed(8);

var ledState = false; //Boolean to hold the state of Led

// Set up the LED actuator
led = smartliving.addAsset(
	"d8",
	"Shop window lighting",
	"A connected LED strip",
	"bool",
	function(){
    	console.log("LED actuator enrolled")
	},function() {
    if(ledState){
            led.on();
    }else{
          led.off();
    }
    ledState = !ledState; //invert the ledState
  }
);

smartliving.connect();