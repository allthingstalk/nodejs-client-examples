var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove button object using GPIO pin 8
// NOTE: We're using the GroveLed UPM library which behaves exactly the same for PIR Motion sensor
var d8 = new grove.GroveButton(8);

// Set up the PIR sensor
pir = smartliving.addAsset(
	"d8",
	"Motion detector",
	"Detects passive infrared motion",
	"bool",
	function(){
    	console.log("Motion detector enrolled")
	}
);

smartliving.connect();

d8State = false;

setInterval(function(){
 
    var reading = d8.value();
  if (d8State != reading){ 				 
    reading = d8State;
   
    if (d8State == 1){
       smartliving.send("true", "d8");
    }
    else{
       smartliving.send("false", "d8");
    }
  }
},100);