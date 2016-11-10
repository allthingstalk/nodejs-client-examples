var allthingstalk = require('allthingstalk');
var smc = require('smc');	//OSX System Management Controller

allthingstalk.credentials = require('./credentials');

cpu = allthingstalk.addAsset(
	"102",
	"Mac CPU Temp",
	"Monitors the temperature of the top secret nuclear reactor controller... AKA my Mac ",
	"double",
	function(){
		console.log("Mac CPU temperature sensor enrolled")
	});

fan = allthingstalk.addAsset(
	"103",
	"Mac fan speed", 
	"Gives a reading from the fan controller",
	"int",
	function(){
		console.log("Fan RPM enrolled")
	});

allthingstalk.connect();

setInterval(function(){
	allthingstalk.send(smc.temperature(), "102");  
	allthingstalk.send(smc.fanRpm(0), "103"); 
},5000);