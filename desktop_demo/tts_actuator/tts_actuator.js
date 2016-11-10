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
var tts = require('say');

allthingstalk.credentials = require('./credentials');

allthingstalk.addAsset("109",
	"A text to speech actuator",
	"A simple node.js text to speech actuator, use it for notifications, and stuff....",
	"string",
	function(){
  		console.log("Text to speech actuator enrolled");
	},
	function(message) {
  		tts.speak(null, message);
	});

allthingstalk.connect();