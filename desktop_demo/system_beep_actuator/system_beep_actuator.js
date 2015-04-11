var smartliving = require('smartliving');

smartliving.loadCredentials();

smartliving.addAsset("104",
	"Notifcation beeper",
	"This is a simple node.js system beep actuator, use it for notifications",
	"bool", 
	function(){
  		console.log("Notifcation beeper enrolled");
	},
	function() {
		console.log('\u0007');	//Generic system beep!
	});

smartliving.connect();