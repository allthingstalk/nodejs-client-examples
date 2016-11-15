/*
   Copyright 2014-2016 AllThingsTalk

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*/   

var allthingstalk = require('allthingstalk');
var grove = require('jsupm_grove');

allthingstalk.credentials = require('./credentials');

// Create the Grove LED object using GPIO pin 4
var d4 = new grove.GroveLed(4);

// Set up the LED actuator
led = allthingstalk.addAsset(
  "d4",
  "A little LED",
  "A connected LED",
  "boolean",
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

// Create the Grove button object using GPIO pin 2
// NOTE: We're using the GroveButton UPM library which behaves exactly the same for PIR Motion sensor
var d2 = new grove.GroveButton(2);

// Set up the PIR sensor
pir = allthingstalk.addAsset(
	"d2",
	"Motion detector",
	"Detects passive infrared motion",
	"bool",
	function(){
    console.log("Motion detector enrolled")
	}
);

allthingstalk.connect();

var state = false; //Don't send the value if it hasn't changed

setInterval(function(){
 
  var reading = d2.value();
	
  if (state != reading){ 				 
    if (state){
       allthingstalk.send("false", "d2");
    }else{
       allthingstalk.send("true", "d2");
    }
	  state = !state;
  }
},100);