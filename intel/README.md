# SmartLiving Intel Galileo & Edison Node.js Client Scripts and Experiments

Here you'll find everything you need to get started with your Intel Galileo & Edison... Along with some great tutorials and experiments.

<IMAGE ON SETUP>

## Setting up your controller with the Intel IoT Developer Kit Operating System Image
Both the Intel Edison and Galileo can run custom Linux operating systems and many are available, the most suitable for SmartLiving is the IoT Developer Kit Edition(Which is setup already to use the Intel XDK).

### Download the IoT Developer Kit Image
This image can be tricky to find depending on where Intel decides to place it(Which seems to change...), we'll do our best to always ensure you have the correct one:

[https://software.intel.com/en-us/iot/downloads](https://software.intel.com/en-us/iot/downloads)

### Burning to your SD Card
You will need something like Win32DiskImager, Pi Baker, or other img writing tool. Here are a few brief steps

#### Windows
#### OSX
#### UNIX

### Running your Controller for the first time 
The first time you run your controller it can take a while to boot up, so leave it for a minute or two.

If you have a Galileo connected via Ethernet it should be discoverable via the Intel XDK, so jump to the next section.

If you're using the Intel Edison you'll need to configure it to connect to your local WiFi network. Here's a few simple steps to do that. 

- Connected a micro USB cable
- Using a serial connection enter the device
- Enter... configure_edison





## Intel XDK IoT Edition Setup & Overview 

[SCREENSHOT]

The Intel XDK IOT Edition is a Integrated Development Environment (IDE) built espically for the Intel IoT Devices. It's primary use is to make it easier to prototype with hardware controllers and front-end HTML5 apps using a suitable development and testing environment for both components.





## Beyond the XDK Environment
- Arduino IDE
- Yocto Linux OS



### Troubleshooting
- The hostname on the network should read, quark or galileo witha  few digits afterwards. If it's booting with 'Clanton' you're using the non-IoT image which provides basic support for Python, Node.js and lacks the XDK-Daemon. Go find the correct image here and burin it correctly
- If you can't find a network connection you should use a serial connection to connect to your controller 