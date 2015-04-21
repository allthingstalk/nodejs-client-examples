# Troubleshooting
So something has gone wrong.

It happens, but here's a few things that can you help you find what's happening, if these basic troubleshooting tips do not help checkout the Intel's FAQ and troubleshooting support

- https://software.intel.com/en-us/articles/intel-edison-troubleshooting-and-faq
- https://software.intel.com/en-us/articles/intel-xdk-iot-edition-troubleshooting-and-faq

## I cannot find my controller via the Intel XDK discovery
This could eb due to a number of reason give these a shot:
- Check power is attached and there's some LED's on the board
- Check your computer is on the same LAN as your controller
- Try a serial connection to your controller to ensure device is booting correctly
- Try a serial connection to your controller and run ifconfig to acquire the device's IP address, from here try a ping and try a manual SSH connection
- Ensure you have bonjour discovery installed on your Windows machine

If you happen to be using a Intel Galileo, the hostname on the network should read, quark or galileo with a few digits afterwards. If it's booting with 'clanton' you're using the stock OS which provides basic support for Python, Node.js and lacks the XDK-Daemon. Go find the correct image here and burn it correctly.

## The project cannot find *request*
There was a problem with node.js downloading the correct library from npm. Ensure you run Install/Build from the XDK otherwise try a restart 

## Assets are not created under my device in the SmartLiving Web App

Verify the unique ID’s (**Line 36**) in your app. Make sure you have identical Unique ID and API keys copied from your account(Could be you have the wrong deviceId!).

## Data is not shown from my sensor or I can't control my actuators

- Verify if sensor and actuator are connected to the correct ports and correspond with the ports defined in the sketch (**Line 44**).
- Check if you are sending the data in the correct format, as specified when defining the assets (**Line 67**). Ex: if you defined an 'int', but are sending the value 'a test'

## I forgot my password for the Edison
You can factory reset the device  doing the following steps

- Make a serial connection to your device
- Power off
- Power on
- 'Press any key to stop autoboot: 1'
- At the boot> screen enter:
- run do_ota
- Done!

## new grove.GroveButton(... Returns TypeError: undefined is not a function  

The jsupm library needs to be updated


## Grove LED jsupms_grove works but Grove button doesn't
SSH in and run:

- opkg update
- opkg upgrade

For edison

- configure_edison --update

## Connecting to the Edison prompts me to upgrade the daemon, but the connection fails when I click upgrade

SSH into the Edison and run
configure_edison --upgrade

## Connecting to the Edison via the XDK fails, but I can SSH in

systemctl status xdk-daemon -l

  - systemctl enable xdk-daemon
  - systemctl restart xdk-daemon

## Can't connect via daemon
Your host machine channged IP address and it's not in the whitelist

  - xdk-whitelist --list 
  - xdk-whitelist --add <Your ip address>
  - xdk-whitelist --add 127.0.0.1

## Can't find mraa library

  - echo "src mraa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/mraa-upm.conf
  - opkg update
  - opkg upgrade

## Clock time is 7 months off...
Update the time on the device, with 'Sync PC time w/clock on target device' from the XDK development page
