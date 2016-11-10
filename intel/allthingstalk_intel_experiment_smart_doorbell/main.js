var allthingstalk = require('allthingstalk');
var grove = require('jsupm_grove');

allthingstalk.credentials = require('./credentials');

// Create the Grove button object using GPIO pin 8
var d8 = new grove.GroveButton(8);

// Set up the push button sensor
button = allthingstalk.addAsset(
	"d8",
	"Doorbell push button",
	"A digital push button",
	"bool",
	function(){
    console.log("Push button enrolled")
	}
);

allthingstalk.connect();

var state = false; //Boolean to hold the state of pin

setInterval(function(){
 
  var reading = d8.value();
  if (state != reading){ 				   
    if (state){
       allthingstalk.send("false", "d8");
    }else{
       allthingstalk.send("true", "d8");
    }
    state=!state;
  }
},100);