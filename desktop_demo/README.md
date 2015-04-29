# SmartLiving Internet of Things Node.js  - Desktop demos

These are a collection of scripts that you can test the nodejs-client with and connect your pc or mac as an IoT device with SmartLiving.

Current demos:

- Command line sensor
- System beep warning actuator
- OSX Text-to-speech actuator 
- OSX CPU temperature and fan speed sensor
	
## Set up & demo
Get started with the command line sensor app

	npm install smartliving
	git clone http://github.com/allthingstalk/nodejs-client-examples
	cd nodejs-client-examples/desktop_demo/cli_sensor
	//Create and update your credentials.json file**
	node cli_sensor

**Before running the command line sensor you'll need to update a credentials.json file with your own auth tokens and deviceId. Here's how you should go about doing that*

- Create a file in the **cli_sensor** directory called **credentials.json**
- Use the format like so:
	
		{
   		 	"deviceId":"jM95n6L75aCt9H9w58sN9sz",
   			"clientId":"MyPersonalClientId",
   			"clientKey":"Cl13n7K3y"
		}

- Create a **device** over at [beta.smartliving.io](http://beta.smartliving.io) and open the sidebar to find your unique deviceId, clientId and clientKey
- Copy and paste your ID's to the correct fields in the credentials.json file you created
- Save and run the app!