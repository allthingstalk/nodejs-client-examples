#Introduction

This starter tutorial guides you how to connect your Intel Galileo or Edison to the SmartLiving Cloud platform, demonstrating how a device can monitor an environment using sensors and actuators, to remotely, autonomously and intelligently interact with the real world.

Here's a short summary of what we'll do:

* Connect some sensors and actuator to an Arduino Grove Shield, connected to your Intel controller
* Configure the Intel controller to talk to the SmartLiving Cloud
* Send sensor data to SmartLiving to view real-time data in the Web App
* Send actuator commands from the Web App to the Intel controller to control actuators

##Ingredients
<img src="http://docs.smartliving.io/img/get-started/arduino/01_overview_kit.jpg" alt="Parts of the Starter kit" align="right"style="margin: 0px 00px 0px 20px; width:40%; max-width:350px">
Here's a checklist of what you'll need to complete the tutorial

* An Intel Galileo or Edison controller
* Some Sensors and Actuators (We're using a Grove starter kit which requires no bread boards or soldering)
* A computer to run the Intel IoT XDK for programming
* It's likely you will need a USB or Serial cable to configure your controller for the first time
* A working internet connection on the same network as your computer

#Prepare your Intel controller for use with SmartLiving

For your Intel controller to interact with the SmartLiving Cloud, you need internet connectivity, if you're using the Intel Galileo you will likely use the Ethernet port on the controller, for an Intel Edison you can use WiFi connectivity.

We wrote two how-to guides for getting your controller set up and connected to the internet.

Setting up your Intel Galileo with the IoT Devloper Kit Operating System Image

Setting up your Intel Edison with the IoT Devloper Kit Operating System Image

- For galileo
	- Download the lib
	- Copy to SD card
	- Expand the archive
	- Put in your galileo
	- screen /dev/tty.usbmodem-* 9600
	- configure..
	- sudo update
	- sudo upgrade	
	- Head to XDK
	
- For Edison

##Configure the Hardware

Next up we need to connect some sensors and actuators (We call these assets) on to our Arduino Grove Shield. In this guide we use the Grove shield (also part of the Starter Kit) which means we don't have to worry about bread boards and electronical bits and pieces. If you don't have a Grove shield and sensors you can always use a traditional bread board setup.
	* Connect the Grove shield to the Arduino headers
	* Connect a Grove rotary switch (potentiometer) to A0 
	* Connect a Grove LED to D8

You should now have something that looks like the upper image to the right:

Let's prepare to program the controller by plugging in a few last cables

* Ensure you're host computer is on the same LAN as the controller (Either by Ethernet or WiFi)
* Connect the power supply and insert it to the mains

#Prepare the SmartLiving Cloud Platform

In the next step, we prepare the SmartLiving Cloud Platform via the web app, for the Intel controller to communicate with the right channels.

The controller will be represented by a **device** in the SmartLiving ecosystem.

Creating a device will generate a unique device ID and API tokens which will be used to update the device's details, enroll connected assets (sensors and actuators) and authenticate the device each time it connects.

Let's get started.

* Log into the SmartLiving Platform at [beta.smartliving.io](http://beta.smartliving.io), (Register for your free account if you haven't already).
* Select *Devices* from the menu<img src="/img/get-started/arduino/05_select_devices.png" alt="Select devices" style="float: none;  display: inline; margin: 0px 0px 0px 0px;">
* Select *Create device* <img src="/img/get-started/arduino/06_create_device.png" alt="Create device" style="float: none;  display: inline; margin: 0px 0px 0px 0px; width:30px">
* Specify the *name* for your controller
<img src="/img/get-started/arduino/07_add_name_description.png" alt="Add your name" align="right"style="margin: 0px 00px 0px 20px; width:60%; max-width:400px">

* Select your newly created device
* Identify your *Device ID*, *Client ID* and *Client Key* they will be used in the next section for programming your controller

#Prepare the Intel XDK IDE on your computer

Next let's install the Intel XDK IoT Edition and set up the node.js library which lets your scripts connect with the platform.

## Download the Intel XDK IoT Edition

First install the controller software on your computer. There is a nice [getting started guide](http://arduino.cc/en/Guide/HomePage) on the official Intel IoT web site.

## Download the Node.js client library
Now we'll download the Node.js client library for SmartLiving, it's a library with a whole bunch of examples and experiments taht can be used beyond the Intel controller.

* Download the [Node.js client from Github](https://github.com/allthingstalk/nodejs-client/archive/master.zip).
> The library contains various examples and experiments that you can try.

* Go to where you have just downloaded the library (if you downloaded via the zip method, unzip it), look for the folder **/intel/smartliving_intel_getting_started** and open the smartliving_intel_getting_started.xdke

More information can be found on the [Importing projects for your intel controller](http://arduino.cc/en/Guide/Libraries).

#Run your first SmartLiving program on the Intel controller

Now we get to the exciting stuff, let's build your first IoT Application!

##Setting up the demo application

In the project folder (which we just took the libraries from) there is an example sketch which we will use for our first exercise.

Open the *arduino-client/examples/iot-demo/* folder and open iot-demo.ino)* file (This should now open in the Arduino IDE)  

The code itself is quite simple, although you don't need to fully understand it, it's good to know what's happening. These are the basic steps it follows to enroll assets, connect communication feeds and receive commands:

* One time enrollment of the device and assets via the [REST Management API](/API/REST)
* Report sensor feed data via the [MQTT Telemetry API](/API/PUB-SUB) at set time intervals
* Receive Actuator commands via the [MQTT Telemetry API](/API/PUB-SUB) on demand and react immediately

Here's the first part of the demo sketch, make sure you have the correct one loaded in your IDE:
```C
#include <Ethernet.h>			//for loading components required by the iot device object.
#include <PubSubClient.h>
#include <ATT_IOT.h>
#include <SPI.h>                //required to have support for signed/unsigned long type.
// AllThingsTalk Makers Arduino Example 
//### Instructions
//1. Setup the Arduino hardware
//	- USB2Serial
//	- Grove kit shield
//	- Potentiometer to A0
//	- Led light to D8
//2. Add 'allthingstalk_arduino_standard_lib' library to your Arduino Environment. [Try this guide](http://arduino.cc/en/Guide/Libraries)
//3. fill in the missing strings (deviceId, clientId, clientKey, mac) and optionally change/add the sensor & actuator names, ids, descriptions, types
//For extra actuators, make certain to extend the callback code at the end of the sketch.
//4. Upload the sketch
//### Troubleshooting
//1. 'Device' type is reported to be missing. 
//	- Make sure to properly add the arduino/libraries/allthingstalk_arduino_standard_lib/ library

char deviceId[] = "YOUR_DEVICE_ID_HERE";
char clientId[] = "YOUR_CLIENT_ID_HERE";
char clientKey[] = "YOUR_CLIENT_KEY_HERE";
```
	

There are a few things we need to change in the previous snippet in order to make sure it's unique to your Arduino. This way, your sensors will communicate using the correct channels and we ensure that the application is authenticated and secure.

Change the sketch as follows:

* Identification and Authorization<img src="/img/get-started/arduino/09_id_keys_web_app.png" alt="Identification and authorization keys" align="right"style="margin: -10px 00px 0px 20px; width:40%; max-width:280px">

	Looking at the demo sketch (Line 32) you’ll see three variables declared for our **deviceId**, **clientId** and **clientKey**. Copy and paste the details from the SmartLiving Web App for the device resources we created in the 'Prepare the SmartLiving Cloud Platform' step.

	Your ID's should now look something like this (This is example data of course):
	```C
	char deviceId[] = "b06308c4169546df9c785915";
	char clientId[] = "jimiHendrix";
	char clientKey[] = "ib2j3gjr3b3";
	```
* Change the MAC address for your Arduino(*If necessary*)

	The majority of network shields for Arduino require you to change the MAC address so it is unique on your network. Change the MAC address **(Line 53)** with the value which is on a printed sticker on the back of your Arduino.
	
		Byte mac[] = {  0x90, 0xA2, 0xDA, 0x0D, 0xE1, 0x3E };  
		 
* Save the Sketch
	
* Compile & upload

	Time to push the code to the Arduino. A few problems could happen here relating to the programming connection from your computer or possible errors in your code.

## Run your program

You will see a log at the bottom of the Arduino IDE with messages which should be self-explanatory. To make sure everything is in order, use the serial monitor to view the output from the Arduino.

Open the serial monitor by going to **Tools** > **Serial Monitor**.
		
The monitor should now be displaying various messages related to the steps mentioned in *Programming the Arduino*
	
<img src="http://docs.smartliving.io/img/get-started/arduino/11_serial_monitor_output.png" alt="Serial monitor output from your Arduino"  width="100%" style="max-width:100%; margin: 20px 0px 20px 0px" align="center">

# Using your first SmartLiving IoT App

<img src="/img/get-started/arduino/12_asset_list_web_app.png" alt="List of assets in the web app" align="right"style="margin: 0px 00px 0px 20px; width:50%">
If the serial monitor is showing a lot of action the sketch is doing it’s job (*WooHoo!*), head back to the SmartLiving Web App and open your Arduino device (Your page may need to be refreshed if you haven’t clicked off the page).

A summary of assets will be available which were created when the Arduino started up, and the latest value from our potentiometer and LED will now be seen.


* You can click on the potentiometer sensor to view more details, including a widget that displays the current values
* If you select the LED asset, you can use the toggle button to control your LED.

# Next Steps
What's next? Try out a few more tutorials or find some inspiration.

* Try out an experiment or two
* Have a **Raspberry Pi** at hand? Try connect this and let it talk to your **Arduino**
* Checkout the get started guide for the SmartLiving Makers Mobile App (Android only at the moment, sorry!)
* Check out the [Featured Projects](http://projects.smartliving.io) in the SmartLiving Maker Zone
* Have a great idea but you need to some help from the community? Share it over on the [Ideas Board](http://ideas.smartliving.io)
