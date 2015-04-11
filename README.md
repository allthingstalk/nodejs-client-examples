# SmartLiving Internet of Things Node.js library, for Raspberry Pi, Intel Edison/Galileo, Web services

Used to connect your sensors, actuators, apps, services, controllers... cat, dog, grandmother to the SmartLiving IoT cloud platform, and interact with any other hardware or front-end you connect.

## Playing with the examples
Here's a ton of examples that will run on Intel Galileo and Edison, and other desktop demos. 

Otherwise checkout the [Node.js client library at Github](https://github.com/allthingstalk/nodejs-client) or the [SmartLiving Doc's](http://docs.smartliving.io) for more info'.

Get started with the command line sensor app

	npm install smartliving
	git clone http://github.com/allthingstalk/nodejs-client-examples
	cd /nodejs-client-examples/desktop_demo/
	node cli_sensor

*Before running the demo sensor you'll need to update a credentials.json file with your own auth tokens and deviceId. Find these over at [beta.smartliving.io](http://beta.smartliving.io) (You'll also find an example credentials file in the package).*


Here's a list of the examples:

- Intel Galileo & Edison
	- Getting Started with SmartLiving & the Intel IoT XDK
	- Smart doorbell
	- Get warned when your Smartphone is unplugged
	- Sense and interpret light values
	- Smart shop window
	- Motion detector to Android text-to-speech trigger
- Desktop demos
	- CLI sensor
	- System beep warning actuator
	- OSX Text-to-speech actuator 
	- OSX CPU temperature and fan speed sensor
	- HTTP Request actuator (Send automated HTTP Requests from SmartLiving via your own service)

## Todo list
- Update the Raspberry Pi pi-gpio examples 
- Provide better integration of SmartLiving widgets that can be loaded via the Intel XDK
- Check if the credentials.json exists, if not walk the user through how to get these details eb-styley through the API