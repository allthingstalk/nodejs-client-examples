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

allthingstalk.credentials = require('./credentials');

allthingstalk.addAsset(
  "105",
  "HTTP Request Actuator", "A simple node.js 'http request actuator' for you to send HTTP messages from the allthingstalk Cloud",
  "string",
  function(){
  	console.log("HTTP Actuator enrolled"),
  },
  function(req){
  request(req, function(){
  	console.log("HTTP Request sent");
  } || function() {});
  }
 );

allthingstalk.connect();