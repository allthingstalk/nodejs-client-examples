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