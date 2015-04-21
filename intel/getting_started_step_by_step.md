#Introduction

This starter tutorial guides you how to connect your Intel Edison to the SmartLiving Cloud platform, demonstrating how a device can monitor an environment using sensors and actuators, to remotely, autonomously and intelligently interact with the real world.

Here's a short summary of what we'll do:

* Configure the Intel Edison to talk to the SmartLiving Cloud
* Connect some sensors and actuator to an Arduino Grove Shield, connected to your Intel Edison
* Send sensor data to SmartLiving to view real-time data in the Web App
* Send actuator commands from the Web App to the Intel Edison to control actuators

##Ingredients

UPDATE WITH EDISON PICTURES

<img src="http://docs.smartliving.io/img/get-started/arduino/01_overview_kit.jpg" alt="Parts of the Starter kit" align="right"style="margin: 0px 00px 0px 20px; width:40%; max-width:350px">
Here's a checklist of what you'll need to complete the tutorial

* An Intel Galileo or Edison controller
* Some Sensors and Actuators (We're using a Grove starter kit which requires no bread boards or soldering)
* A computer to run the Intel IoT XDK for programming
* It's likely you will need a USB or Serial cable to configure your controller for the first time
* A working internet connection on the same network as your computer

# Prepare the hardware

POINT TO EDISON FIRT RUN HOW TO

Next up we need to connect some sensors and actuators (We call these assets) on to our Arduino Grove Shield. In this guide we use the Grove shield (part of the Starter Kit) which means we don't have to worry about bread boards and electronical bits and pieces. If you don't have a Grove shield and sensors you can always use a traditional bread board setup.

* Connect the Grove shield to the Arduino headers
* Connect a Grove rotary switch (potentiometer) to A0 
* Connect a Grove LED to D4
* Finally attach the power cable

ADD IMAGE HERE


# Prepare the SmartLiving Cloud

In the next step, we prepare the SmartLiving Cloud Platform via the web app, for the Intel Edison to communicate with the right channels.

The controller will be represented by a **device** in the SmartLiving ecosystem.

Creating a device will generate a unique device ID and API tokens which will be used to update the device's details, enroll connected assets (sensors and actuators) and authenticate the device each time it connects.

Let's get started.

* Log into the SmartLiving Cloud at [beta.smartliving.io](http://beta.smartliving.io), (Register for your free account if you haven't already).
* Select *Devices* from the menu<img src="/img/get-started/arduino/05_select_devices.png" alt="Select devices" style="float: none;  display: inline; margin: 0px 0px 0px 0px;">
* Select *Create device* <img src="/img/get-started/arduino/06_create_device.png" alt="Create device" style="float: none;  display: inline; margin: 0px 0px 0px 0px; width:30px">
* Specify the *name* for your controller
<img src="/img/get-started/arduino/07_add_name_description.png" alt="Add your name" align="right"style="margin: 0px 00px 0px 20px; width:60%; max-width:400px">

* Select your newly created device
* Identify your *Device ID*, *Client ID* and *Client Key* they will be used in a following section for programming your controller

# Prepare the software
A few last steps before we start playing with our hardware.

## Run the Intek IoT XDK
Next let's open the getting started application into the Intel XDK IDE. (If you haven't yet downloaded the Intel IoT XDK here's (a how to guide to get you ready)[LINK TO HOW TO GUIDE HERE] 

## Download the SmartLiving Examples for Edison
Now we'll download the Node.js client library for SmartLiving, it's a library with a whole bunch of examples and experiments that can be used on Intel controllers, Raspberry Pi and even your desktop PC.

- Download the [Node.js client from Github](https://github.com/allthingstalk/nodejs-client-examples/archive/master.zip). Alternatively if you're a git guru you can also clone the repo from GitHub
	
	*git clone https://github.com/allthingstalk/nodejs-client-examples*

## Open the Getting Started Project
From the Intel XDK open the SmartLiving Getting Started project:

- Navigate to where you saved the SmartLiving examples and find the getting started project

	*/intel/smartliving_intel_getting_started_upm*
	
- select the **smartliving_intel_getting_started_upm.xdk** file with the Intel XDK
- Click on the develop tab in the top right corner

You will now see the getting started project in the XDK, it's a very simple project which does the following steps:
- Includes some libraries we require for connecting to SmartLiving and talking to our hardware
- Defines the Potentiometer and LED hardware that was connected
- Connects to SmartLiving
- Sets up the sensor channel for the potentiometer

And that's it!

## Add your credentials 

In order for your Intel Edison to authenticate and connect to SmartLiving you will need to add your authentication tokens that were created when you created your device in the SmartLiving web app. Head back over and find your deviceId, clientId and clientKey.

You know need to create a credentials.json file in your project

- Right click in the project files area and select 'New file'
- Name the file **credentials.json** (Make sure the spelling is correct!)
- The credentials.json should use the following structure in the new file (Copy and paste this!)

		{
			"deviceId":"",
			"clientId":"",
			"clientKey":""
		}
		
- Copy and paste your user credentials from the SmartLiving Web App, your credentials file should now look something like this

		{
 		   "deviceId":"jM95n6L75aCt9H9w58sN9sz",
 		   "clientId":"MyPersonalClientId",
 		   "clientKey":"Cl13n7K3y"
		}
- Save the file and your done!

# Run your first IoT app

Now we get to the exciting stuff, let's build your first IoT Application!

In order to run your code on the Intel Edison you'll need to upload your code, build and install the project and then run your code, to do this just click the relevant buttons as listed below

- Upload 
- Install/Build
- Run

If all went well you should see the output from your device on the console(The black box in the XDK)!

STICK PICTURE HERE!

If you're not seeing a lot of sensor data being sent, you'll probably see an error message... If this is the case check out the troubleshooting details.

## Interact with your IoT Device

If ther is showing a lot of action on the console it’s job (*WooHoo!*), head back to the SmartLiving Web App and open your Getting Started device (Your page may need to be refreshed if you haven’t clicked off the page).

A summary of assets will be available which were created when the Edison started the app, and the latest value from our potentiometer and LED will also now be seen

* You can click on the potentiometer sensor to view more details, including a widget that displays the current values
* If you select the LED asset, you can use the toggle button to control your LED

## Automate your IoT Device

Now that we know our Intel Edison is working from the SmartLiving Web App we can configure some automation using automation rules from SmartLiving.

- Click rules
- When...
- Then...

Know just turn your potentiometer and see the LED change automagically! 

# Next Steps
What's next? Try out a few more tutorials or find some inspiration.

* Try out an experiment or two
* Already have an Arduino or Raspberry Pi? Get them connected and let them talk to your Edison
* Own an Android device? Checkout the get started guide for the SmartLiving Makers Mobile App (Android only!)
* Have a great idea but you need to some help from the community? Share it over on the [Ideas Board](http://ideas.smartliving.io)
