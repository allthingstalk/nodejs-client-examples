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

// Create the Grove Light sensor object using GPIO pin a1
var a1 = new grove.GroveLight(1);

// Set up the push button sensor
light = allthingstalk.addAsset(
	"a1",
	"Lux sensor",
	"Reads light in lux",
	"int",
	function(){
    	console.log("Light sensor enrolled")
	}
);

allthingstalk.connect();

setInterval(function(){
  console.log(a1.name() + " raw value is " + a1.raw_value() +
            ", which is roughly " + a1.value() + " lux");
	
  allthingstalk.send(a1.value(), "a1");
},5000);