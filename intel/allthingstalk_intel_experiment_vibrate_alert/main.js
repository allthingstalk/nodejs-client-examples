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

// Create the Grove object using GPIO pin 7
// NOTE: We're using the GroveLed UPM library which behaves exactly the same for vibration motor
var d7 = new grove.GroveLed(7);

// Set up the Vibration motor actuator
allthingstalk.addAsset(
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

allthingstalk.connect();