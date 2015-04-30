var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove LED object using GPIO pin 4
var d4 = new grove.GroveLed(4);

// Set up the LED actuator
smartliving.addAsset(
	"d4",
	"Shop window lighting",
	"A connected LED strip",
	"bool",
	function(){
    	console.log("LED actuator enrolled")
	},function(command) {
    if(command=="true"){
      d4.on();
    }else{
      d4.off();
    }
}
);

smartliving.connect();