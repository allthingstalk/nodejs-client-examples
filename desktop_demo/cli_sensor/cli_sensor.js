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