var smartliving = require('smartliving');
var grove = require('jsupm_grove');

smartliving.credentials = require('./credentials');

// Create the Grove button object using GPIO pin 4
var d4 = new grove.GroveButton(4);

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
 
  var reading = d4.value();
  if (state != reading){ 				   
    if (state){
       smartliving.send("true", "d4");
    }else{
       smartliving.send("false", "d4");
    }
    state=!state;
  }
},100);