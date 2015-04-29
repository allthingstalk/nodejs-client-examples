# Getting started with SmartLiving and Edison quick guide

**Here's a short sharp starter guide for getting started with SmartLiving and the Intel Edison.

If you have troubles try out the [step by step walk through](http://docs.smartliving.io/Get_Started/Intel_Edison/Step_by_Step).**


- Download the [SmartLiving examples from GitHub](https://github.com/allthingstalk/nodejs-client-examples)

	*git clone http://github.com/allthingstalk/nodejs-client-examples*

- Open the getting started project with the Intel XDK

	*/nodejs-client-examples/intel/smartliving_intel_getting_started_upm/smartliving_intel_getting_started_upm.xdk*

- Setup your controller and hardware

	- Attach Grove shield to the breakout board
	- Rotary knob to A0
	- LED to D4
	- Power up your device

- Log in and create your device over at [beta.smartLiving.io](http://beta.smartliving.io)
- Create and configure your *credentials.json* at the root of the project
    
        { 
           "deviceId":"",
           "clientId":"",
           "clientKey":""
        }
       

- Hit the upload button
- Run your project
- Test the newly created sensor and actuator manually via the web app
	
	*Turn the rotary knob and see updated values on the knob dial*
	
	*The LED is controllable from a toggle button*
	
- Create an automation rule (Follow the wizard but the logic should read as follows)

	     When 
	     		EdisonStarter.knob > 500
	     Then 
	     		EdisonStarter.Led = True	     		

- Try out your automation rule!

** This quick start assumes you've already installed the XDK, prepared your controller, and took your Edison on a test flight. Check out the [introduction](http://docs.smartliving.io/Get_Started/Intel_Edison/) to get through these things **
    
## Next steps

Try out more experiments for Intel controllers that you can find in the **nodejs-client-examples** repo' you downloaded, as well as experiment guides