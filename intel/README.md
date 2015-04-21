# SmartLiving Intel Galileo & Edison IoT XDK Node.js Apps and Experiments

Here you'll find everything you need to get started with your SmartLiving IoT Starter Kit: Intel Edison Edition.

This kit uses the awesome Intel IoT XDK (Cross-platform Development Kit) for Galileo & Edison, making it easy to program IoT applications.

## What can you find?
Find the documentation and places to get support for starting with Intel IoT SBC's

- Preparing the Intel IoT Hardware and Software
- 10 step getting started for SmartLiving and Intel IoT **(For pro's)**
- Step by step walkthrough getting started for SmartLiving and Intel IoT **(For beginners)**
- SmartLiving IoT Starter Kit Experiments 
- Troubleshooting
- How to's

## Preparing your IoT Hardware & Software
Here's a few pointers to get you ready to developing with  SmartLiving and Intel SBC's.

### Intel XDK IoT Edition Install & Overview 

![image](http://d2wwfe3odivqm9.cloudfront.net/wp-content/uploads/2014/12/xdk-2.png)

The Intel XDK IOT Edition is a Integrated Development Environment (IDE) built especially for Intel IoT Devices. It's primary use is to make it easier to prototype with hardware controllers and front-end HTML5 apps using an all in one solution for development and testing.

### Download the XDK
Follow the link and download the software from the Intel website:

[https://software.intel.com/en-us/html5/xdk-iot](https://software.intel.com/en-us/html5/xdk-iot)

If you would like the techie guide follow Intel's [getting started page](https://software.intel.com/en-us/xdk/docs/getting-started-with-intel-xdk-iot-edition)

### Preparing your Controller
#### Edison

The Edison has everything onboard to get started, but you will have to configure the device and connect it to your WiFi network. This is a one-time action to get setup and requires connecting directly to the Edison with a serial cable, here are the steps:

- Connect your Edison to the breakout board and power it up
- Time to configure the Edison, in short you need to connect via serial connection and run the configuration command,here's a detailed guide depending on what OS your computer uses:
	- [For Windows](https://software.intel.com/en-us/articles/getting-started-with-the-intel-edison-board-on-windows)
	- [For Mac OS](https://software.intel.com/en-us/articles/getting-started-with-the-intel-edison-board-on-mac#terminal)
	- [For Linux](https://software.intel.com/en-us/articles/getting-started-with-the-intel-edison-board-on-linux#terminal)
- Once you've configured the name and password you can now set up the WiFi, whilst still connected via serial enter
 
		configure_edison --wifi
		*Select your network*
		*Enter the networks password (If required)* 

**NOTE:** *If you're using a Windows 64 bit machine you can use this [neat app Intel](http://downloadmirror.intel.com/24738/eng/iotdk_win_installer.exe) have built to make this process a bit easier(Mac and Linux apps coming soon, apparently )*

- To check that all went smoothly, start the Intel XDK and look for your IoT device (It should read something like *quark123891234*) 

For more help setting up your Edison check out the Intel developer resources for Edison:
- [Intel Edison Developer Resources](https://software.intel.com/en-us/articles/intel-edison-developer-resources)
- [Intel Edison getting started with Wifi](https://software.intel.com/en-us/articles/intel-edison-getting-started-wifi)

#### Galileo
The Galileo uses an SD card to store its operating system so you will need to grab the latest OS and burn it to your card. Let's prep' it.

- [Download the latest IoT Development Kit image](https://software.intel.com/en-us/iot/downloads)
- Burn to your SD card using Intel’s guide for your operating system
	- [For Windows](https://software.intel.com/en-us/programming-blank-sd-card-with-yocto-linux-image-windows)
	- [For Mac OS](https://software.intel.com/en-us/programming-blank-sd-card-with-yocto-linux-image-os-x)
	- [For Linux](https://software.intel.com/en-us/programming-blank-sd-card-with-yocto-linux-image-linux)
- Put the SD card in your controller, attach the network and power up your controller
- To check that all went smoothly, start the Intel XDK and look for your IoT device (It should read something like *quark123891234*) 

For more help setting up your Galileo check out the Intel developer resources for Galileo:

### First run Blinking LED
Before getting started building your IoT applications with SmartLiving, let's test drive what's just been set up with a Blinking LED 

- Open the XDK
- Select 'New project based on template'
- Blinking LED
- Select your IoT Device
- Upload
- Run

The onboard LED should now be blinking. Woohoo!

**Time to make some real IoT happen.**

### Getting help setting up the Intel IoT Tools
If you run in to problems the experts over at Intel can help get things solved

[https://software.intel.com/en-us/forums/intel-xdk-iot-edition](https://software.intel.com/en-us/forums/intel-xdk-iot-edition)



## SmartLiving IoT Starter Kit - Apps and Experiments
We wrote a series of tutorials for you use with your SmartLiving IoT Starter Kit, for the detailed docs go checkout docs.smartliving.io

Here's a list of what you can can build and experiement:

- Smart doorbell
- Get warned when your Smartphone is unplugged
- Sense and interpret light values
- Smart shop window
- Motion detector to Android text-to-speech trigger

### Hardware setup for Apps and Experiments

Generally we use the same hardware setup for the grove modules using the same pins so you can set your hardware up and leave it

	a0 = Potentiometer
	a1 = Light sensor
	a2 = Temperature sensor
	
	d4 = Push button
	d3 = IR emitter
	d2 = Motion sensor

	d8 = LED
	d7 = Vibration motor
	d6 = LED bar 
	d5 = IR receiver / RFID Receiver
