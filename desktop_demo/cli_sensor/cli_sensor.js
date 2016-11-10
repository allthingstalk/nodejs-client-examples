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

var cli = allthingstalk.addAsset(
  "101",
  "Command-line input sensor",
  "A simple node.js 'cli sensor' for you to test your connection with allthingstalk, regardless of OS",
  "string",
  function(){
    console.log("cli sensor enrolled\n");
    console.log("Enter your sensor data:");
});

allthingstalk.connect();
 
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  
  process.stdin.on('data', function (result) {  
    if (result === 'quit\n') {
      console.log('Bye bye.');
      process.exit();
    }

    console.log("\n");
    allthingstalk.send(result, "101");
    console.log("Enter your sensor payload data:");
  });