var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove button object using GPIO pin 8
var d8 = new grove.GroveButton(8);

// Set up the push button sensor
button = smartliving.addAsset(
	"d8",
	"Doorbell push button",
	"A digital push button",
	"bool",
	function(){
    	console.log("Push button enrolled")
	}
);

smartliving.connect();

bool prevReading = false;

setInterval(function(){
 
    var reading = d8.value();
  if (prevReading != reading){ 				 
    reading = prevReading;
   
    if (prevReading == 1){
       smartliving.send("true", "d8");
    }
    else{
       smartliving.send("false", "d8");
    }
  }
},100);




