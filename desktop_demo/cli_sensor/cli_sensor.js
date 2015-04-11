var smartliving = require('smartliving');

smartliving.credentials = require('./credentials');

var cli = smartliving.addAsset(
  "101",
  "Command-line input sensor",
  "A simple node.js 'cli sensor' for you to test your connection with SmartLiving, regardless of OS",
  "string",
  function(){
    console.log("cli sensor enrolled\n");
    console.log("Enter your sensor data:");
});

smartliving.connect();
console.log("\nCheck out this widget to view your data in a web app: \n\nhttp://widget.smartliving.io/textbox/?device=" + smartliving.credentials.deviceId + "&asset="+smartliving.credentials.deviceId +cli.localId+"&key="+smartliving.credentials.clientKey +"&id="+smartliving.credentials.clientId +"&type=sensor\n");
 
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  
  process.stdin.on('data', function (result) {  
    if (result === 'quit\n') {
      console.log('Bye bye.');
      process.exit();
    }

    console.log("\n");
    smartliving.send(result, "101");
    console.log("Enter your sensor payload data:");
  });