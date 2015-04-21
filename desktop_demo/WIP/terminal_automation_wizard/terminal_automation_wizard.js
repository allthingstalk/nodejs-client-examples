var smartliving = require('smartliving');
var sys = require('sys')
var exec = require('child_process').exec;

smartliving.credentials = require('./credentials');

smartliving.addAsset("106",
  "Terminal input receiver",
  "Takes string input from the SmartLiving cloud and issues it to the terminal",
  "string",
  function(command){
    console.log("terminal input enrolled");
  },
  function(message) {
    //Acknowledge we received the message
    smartliving.send(message, "106");

    function puts(error, stdout, stderr) {
      sys.puts(error||stdout||stderr)
      smartliving.send(error||stdout||stderr, "107");
      }

      //Run the command, print the result and send to our response output
      exec(message, puts);
  });

smartliving.addAsset("107",
  "Terminal response output",
  "Once the input string has been processed by the end point we'll publish on another topic, ensure input messages are acknowledged correctly",
  "string",
  function(){
    console.log("terminal output enrolled");
  });

smartliving.connect();