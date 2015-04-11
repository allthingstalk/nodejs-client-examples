var smartliving = require('smartliving');
var tts = require('say');

smartliving.loadCredentials();

smartliving.addAsset("109",
	"A text to speech actuator",
	"A simple node.js text to speech actuator, use it for notifications, and stuff....",
	"string",
	function(){
  		console.log("Text to speech actuator enrolled");
	},
	function(message) {
  		tts.speak(null, message);
	});

smartliving.connect();