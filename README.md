# AllThingsTalk Internet of Things Node.js library, for Raspberry Pi, Intel Edison/Galileo, Web services

Use it to connect your sensors, actuators, apps, services, controllers... Cat, dog, grandmother to the AllThingsTalk IoT Cloud platform, and interact with any other hardware or front-end you connect using REST, MQTT, STOMP, or AMQP.

For more info' on what you can connect checkout [maker.allthingstalk.com](http://www.maker.allthingstalk.com)

## Quick start example
Get started with the command line sensor app

	npm install allthingstalk
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

- Create a **device** over at [maker.AllThingsTalk.com](http://maker.allthingstalk.com) and open the sidebar to find your unique deviceId, clientId and clientKey
- Copy and paste your ID's to the correct fields in the credentials.json file you created
- Save and run the app!


## Playing with the examples
There are many examples included that will run on Intel Galileo and Edison, as web services, and other desktop demos. 

For more info' checkout [Node.js client library at Github](https://github.com/allthingstalk/nodejs-client) and the [SmartLiving Doc's](http://docs.smartliving.io).

Here's a list of the examples:

- [Intel Galileo & Edison](https://github.com/allthingstalk/nodejs-client-examples/tree/master/intel)
	- Getting Started with AllThingsTalk & the Intel IoT XDK
	- Smart doorbell
	- Get warned when your Smartphone is unplugged
	- Sense and interpret light values
	- Smart shop window
	- Motion detector to Android text-to-speech trigger
- Desktop demos
	- Command line sensor
	- System beep warning actuator
	- OSX Text-to-speech actuator 
	- OSX CPU temperature and fan speed sensor

## Todo list
- Update the Raspberry Pi pi-gpio examples 
- Provide better integration of AllThingsTalk widgets that can be loaded via the Intel XDK
- Check if the credentials.json exists, if not walk the user through how to get these details eb-styley through the API
