var allthingstalk = require('allthingstalk');
var sys = require('sys')
var exec = require('child_process').exec;

allthingstalk.credentials = require('./credentials');

allthingstalk.addAsset("106",
  "Terminal input receiver",
  "Takes string input from the allthingstalk cloud and issues it to the terminal",
  "string",
  function(command){
    console.log("terminal input enrolled");
  },
  function(message) {
    //Acknowledge we received the message
    allthingstalk.send(message, "106");

    function puts(error, stdout, stderr) {
      sys.puts(error||stdout||stderr)
      allthingstalk.send(error||stdout||stderr, "107");
      }

      //Run the command, print the result and send to our response output
      exec(message, puts);
  });

allthingstalk.addAsset("107",
  "Terminal response output",
  "Once the input string has been processed by the end point we'll publish on another topic, ensure input messages are acknowledged correctly",
  "string",
  function(){
    console.log("terminal output enrolled");
  });

allthingstalk.connect();