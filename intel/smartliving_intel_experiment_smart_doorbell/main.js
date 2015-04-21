var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove button object using GPIO pin 8
var d8 = new grove.GroveButton(8);

// Set up the push button sensor
button = smartliving.addAsset(
	"d4",
	"Doorbell push button",
	"A digital push button",
	"bool",
	function(){
    console.log("Push button enrolled")
	}
);

smartliving.connect();

var state = false; //Boolean to hold the state of pin

setInterval(function(){
 
  var reading = d8.value();
  if (state != reading){ 				   
    if (state){
       smartliving.send("false", "d8");
    }else{
       smartliving.send("true", "d8");
    }
    state=!state;
  }
},100);