# SmartLiving Intel Galileo & Edison IoT XDK Node.js Apps and Experiments

Here you'll find everything you need to get started with your SmartLiving IoT Starter Kit: Intel Edison Edition.

This kit uses the awesome Intel IoT XDK (Cross-platform Development Kit) for Galileo & Edison, making it easy to program IoT applications.

## What can you find?

- Preparing the Intel IoT Hardware and Software
- SmartLiving IoT Starter Kit - Apps and Experiments
- 10 step getting started for SmartLiving and Intel IoT **(For pro's)**
- Step by step walkthrough getting started for SmartLiving and Intel IoT **(For beginners)**
- Next steps

## Preparing your IoT Hardware & Software
Here's a few pointers to get you ready to develop with SmartLiving and Intel.

### Intel XDK IoT Edition Install & Overview 

![image](http://d2wwfe3odivqm9.cloudfront.net/wp-content/uploads/2014/12/xdk-2.png)

The Intel XDK IOT Edition is a Integrated Development Environment (IDE) built especially for Intel IoT Devices. It's primary use is to make it easier to prototype with hardware controllers and front-end HTML5 apps using an all in one solution for development and testing.

### Download the XDK
[Download the XDK installer from the Intel website](https://software.intel.com/en-us/html5/xdk-iot)

Once downloaded install as you would any other software and then create an account through the XDK so you can get started (*Unfortunately, creating an account is requried to use the XDK...*).

**If you would like the techie guide follow Intel's [getting started page](https://software.intel.com/en-us/xdk/docs/getting-started-with-intel-xdk-iot-edition)**

### Hardware setup
After onboxing your Edison you'll need to connect the hardware together. Here's the steps to take:

- Connect your Edison to the Arduino breakout board
- Ensure the Edison is firmly connected 
- Attach your Grove shield to the Arduino pins
- Connect both micro USB cables to your Edison
- Connect the other ends of the micro USB cables

### Updating the firmware for your Edison

- Download the latest [Yocto image for Edison](http://downloadmirror.intel.com/24698/eng/edison-image-ww05-15.zip
) and unzip it to your computer (*Moving files directly from the zip can causes issues so unzipping is advised!*)
- Copy and paste the files to the Edison drive that is now connected
- Prepare to make a serial connection to your device, you can do this from the Intel XDK by clicking on the Serial Terminal under the development tab of a project (Just open a sample template to access the developer tab)
- Power off
- Power on
- You now have to make your serial connection before the autoboot starts
- Press any key when you see *'Press any key to stop autoboot: 1'*
- At the *boot>* prompt enter **run do_ota**
- Wait a few minutes and then you'll be prompted to log in
- The *default username and password is* user: root password: (leave blank there is no password)!

### First time Edison Setup
Edison is up to date with latest firmware, there's now a one-time setup to complete whilst you're connected via a serial cable, here are the steps:

- Enter the command and follow the steps:

		configure_edison --setup
		*Enter a password*
		*Enter a device name* 
		*Check device name and confirm with  *
		*Enter Y to configure wifi*
		*Select your WiFi network*
		*Enter Y to confirm*
		*Enter the network's password (If required)* 
		*Wait for success message*
		
- Next add your host computer's IP address to the Edison whitelist, via the serial connection enter the following: 
  		
		xdk-whitelist --add <Your IP address>
		xdk-whitelist --add 127.0.0.1

*To find your IP address open a command prompt and enter ifconfig (For Linux & Mac) or ipconfig (For Windows), make sure you use the IP address from the same local network the controller is on*

*NOTE: If you run into trouble the detailed guides for your OS can be found over at Intel:*
	- [For Windows](https://software.intel.com/en-us/articles/getting-started-with-the-intel-edison-board-on-windows)
	- [For Mac OS](https://software.intel.com/en-us/articles/getting-started-with-the-intel-edison-board-on-mac#terminal)
	- [For Linux](https://software.intel.com/en-us/articles/getting-started-with-the-intel-edison-board-on-linux#terminal)
		
For the Grove sensors and actuators used with each of the experiments in the kit, we need to update the Grove library to get all the latest goodies. 

Run the following commands and you're good to go.

		echo "src mraa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/mraa-upm.conf
		opkg update
		opkg upgrade

*NOTE: IF you're using the latest firmware the opkg command will result in some action on the terminal, if nothing happens it's possible you're using an old version*		

Finally let's do a reboot

		reboot


- To check that all went smoothly, look for your IoT device in the develop tab by clicking *Select a device*
- Select your device
- Connect using the password you provided previously

For more help setting up your Edison check out the Intel developer resources for Edison:
- [Intel Edison Developer Resources](https://software.intel.com/en-us/articles/intel-edison-developer-resources)
- [Intel Edison getting started with Wifi](https://software.intel.com/en-us/articles/intel-edison-getting-started-wifi)

**NOTE:** *If you're using a Windows 64 bit machine you can use this [neat app Intel](http://downloadmirror.intel.com/24738/eng/iotdk_win_installer.exe) have built to make this process a bit easier(Mac and Linux apps coming soon, apparently )*


### First run Blinking LED
Before getting started building your IoT applications with SmartLiving, let's test drive what's just been set up with a Blinking LED 

- Open the projects/welcome page of the XDK
- Select 'New project based on template'
- Select 'Onboard LED Blink'
- Create a name for your project
- Select your IoT Device
- Upload
- Build
- Run!

The onboard LED should now be blinking. AMAZING!

*NOTE: If you're running on Windows, the XDK doesn't come with the example templates :'(*

*But you can download and open them in the XDK*

# SmartLiving IoT Starter Kit - Apps and Experiments
To get started with SmartLiving there's a getting started project and some experiments for you to try out.

[10 step quick start for pro's](https://github.com/allthingstalk/nodejs-client-examples/blob/master/intel/getting_started_quick_start.md)

[Step by step guide for beginners](https://github.com/allthingstalk/nodejs-client-examples/blob/master/intel/getting_started_quick_start.md)

Here's a list of experiments available to try:
- Smart doorbell
- Get warned when your Smartphone is unplugged
- Sense and interpret light values
- Smart shop window
- Motion detector to Android text-to-speech trigger

Head over to the SmartLiving Doc's website to find out more.

[docs.smartliving.io](http://docs.smartliving.io)


### Hardware setup for Apps and Experiments

Generally we use the same hardware setup for the grove modules using the same pins so you can set your hardware up and leave it

	a0 = Rotary Knob/Potentiometer
	a1 = Light sensor
	a2 = Temperature sensor
	
	d8 = Push button
	d3 = IR emitter
	d2 = Motion sensor

	d4 = LED
	d7 = Vibration motor
	d6 = LED bar 
	d5 = IR receiver / RFID Receiver

### Getting help setting up the Intel IoT Tools

With any new tech' there's always a few quirks, we've put together a shortlist for troubleshooting some of the most common problems you might bump into whilst setting up your controller.

[Troubleshooting the Edison](https://github.com/allthingstalk/nodejs-client-examples/blob/master/intel/trouble_shooting.md)

If you run into big problems the experts over at Intel can help get things solved

[Intel XDK IoT Forum](https://software.intel.com/en-us/forums/intel-xdk-iot-edition)

## Other info'

### Getting started with Galileo
If you have an Intel Galileo, you can try out all the exact same apps and experiments available with the SmartLiving Edison Kit.

The Galileo uses an SD card to store its operating system so you will need to grab the latest OS and burn it to your card. Let's prep' it.

- [Download the latest IoT Development Kit image](https://software.intel.com/en-us/iot/downloads)
- Burn to your SD card using Intel’s guide for your operating system
	- [For Windows](https://software.intel.com/en-us/programming-blank-sd-card-with-yocto-linux-image-windows)
	- [For Mac OS](https://software.intel.com/en-us/programming-blank-sd-card-with-yocto-linux-image-os-x)
	- [For Linux](https://software.intel.com/en-us/programming-blank-sd-card-with-yocto-linux-image-linux)
- Put the SD card in your controller, attach the network and power up your controller
- To check that all went smoothly, start the Intel XDK and look for your IoT device (It should read something like *quark123891234*) 
