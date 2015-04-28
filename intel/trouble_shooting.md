# Troubleshooting
So something has gone wrong.

It happens, but here's a few things that can you help you find what's happening, if these basic troubleshooting tips do not help checkout the Intel's FAQ and troubleshooting support

- https://software.intel.com/en-us/articles/intel-edison-troubleshooting-and-faq
- https://software.intel.com/en-us/articles/intel-xdk-iot-edition-troubleshooting-and-faq

## I cannot find my controller via the Intel XDK discovery
This could be due to a number of reason give these a shot:
- Check power is attached and there's some LED's on the board
- Check your computer is on the same LAN as your controller
- Try a serial connection to your controller to ensure device is booting correctly
- Try a serial connection to your controller and run ifconfig to acquire the device's IP address, from here try a ping and try a manual SSH connection
- Ensure you have bonjour discovery installed on your Windows machine

*If you happen to be using a Intel Galileo, the hostname on the network should read, quark or Galileo with a few digits afterwards. If it's booting with 'clanton' you're using the stock OS which provides basic support for Python, Node.js and lacks the XDK-Daemon. Go find the correct image here and burn it correctly.*


## The project cannot find *request*
There was a problem with node.js downloading the correct library from npm. Ensure you run Install/Build from the XDK otherwise try a reboot your controller 

## Assets are not created under my device in the SmartLiving Web App

Verify the unique ID’s in your **credentials.json** are correct. Make sure you have identical Unique ID and API keys copied from your account (Could be you have the wrong deviceId!).

## Data is not shown from my sensor or I can't control my actuators

- Verify if sensor and actuators are connected to the correct ports and correspond with the ports defined in the sketch 
- Check if you are sending the data in the correct format, as specified when defining the assets. Eg. if you defined an 'int', but are sending the value 'a test' the platform will not accept the data

## I forgot my password for the Edison
You can factory reset the device by doing the following steps

- Plug cable into the filesystem usb port (Ensure switch is in down position)
- Download the latest [Yocto image for Edison](http://downloadmirror.intel.com/24698/eng/edison-image-ww05-15.zip
)
- Unzip it to your computer (*Moving files directly from the zip can causes issues so unzipping it locally is advised!*)
- Drag and drop the files to the drive that appears as Edison that is now connected
- Make a serial connection to your device using baud rate 115200
- Power off the device
- Power back on
- Press a key, when you see *'Press any key to stop autoboot: 1'* 
- At the *boot>* prompt enter **run do_ota**
- Done!

## *new grove.GroveButton* Returns TypeError: undefined is not a function  
The jsupm library needs to be updated\:

- echo "src mraa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/mraa-
- opkg update
- opkg upgrade

## A few Grove sensors do not work

Connect to your controller and enter the following

- echo "src mraa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/mraa-
- opkg update
- opkg upgrade

You can also find other examples in the [jsupm examples on github](https://github.com/intel-iot-devkit/upm/tree/master/examples/javascript).


## Connecting to the Edison prompts me to upgrade the daemon, but the connection fails when I click upgrade

SSH into the Edison and run

  - configure_edison --upgrade
  
## Receiving *'Error on ssh connection: Error: Timed out while waiting for handshake*

This is an intermittent problem normally. Try an SSH/Serial connection, reboot your device. Disconnect and reconnect to your WiFi.

## Receiving *Intel XDK - IoT App Daemon (requires Intel XDK IoT Edition greater than 075) v0.0.27 - commands: run, list, debug, status*

configure_edison -upgrade

## Receiving *uncaught Exception occurred Error: dns.service.error: bad reference* 

Reboot the device 

## Connecting to the Edison via the XDK fails, but I can SSH in

  - systemctl status xdk-daemon -l
  - systemctl enable xdk-daemon
  - systemctl restart xdk-daemon

## Can't connect via daemon
Your host machine changed IP address and it's not in the whitelist

  - xdk-whitelist --list 
  - xdk-whitelist --add <Your ip address>
  - xdk-whitelist --add 127.0.0.1

## Can't find mraa library

  - echo "src mraa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/mraa-upm.conf
  - opkg update
  - opkg upgrade

## Clock time is 7 months off...
Update the time on the device, with 'Sync PC time w/clock on target device' from the XDK development page

## Can't find my intel device
Ensure Bonjour is running and you're on the same network (Windows users need to install Bonjour manually!)

## Can't find serial device from the XDK
Ensure the FTDI driver is installed on your machine (Windows users need to do this manually)

## How do I do a factory reset

- Plug cable into the filesystem usb port (Ensure switch is in down position)
- Download the latest [Yocto image for Edison](http://downloadmirror.intel.com/24698/eng/edison-image-ww05-15.zip
) and unzip it to your computer (*Moving files directly from the zip can causes issues so unzipping it locally is advised!*)
- Drag and drop the files to the Edison drive that is now connected
- Make a serial connection to your device
- Power off
- Power on
- 'Press any key to stop autoboot: 1'
- At the boot> screen enter:
- run do_ota
- Done!

## When I reboot the Edison it crashes my OSX machine and it foreces a restart 
This is a strange issue which is hard to pin point... We found it occurs only when you have a micro usb cable connected for the file system along with no power supply. Connect a power supply or remove the filesystem whilst you reboot.

