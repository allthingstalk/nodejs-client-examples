# Getting started with SmartLiving and Edison quick guide

Here's a short sharp starter guide for getting started with SmartLiving and the Intel Edison. If you have troubles try out the [step by step walk through](/getting_started_step_by_step.md).

## In 10 Steps

1. Download the [SmartLiving examples from GitHub](https://github.com/allthingstalk/nodejs-client-examples)

	*git clone http://github.com/allthingstalk/nodejs-client-examples*

2. Open the getting started project with the Intel XDK

	*/nodejs-client-examples/intel/smartliving_intel_getting_started_upm/smartliving_intel_getting_started_upm.xdk*

3. Setup your controller and hardware

	- Attach Grove shield to the breakout board
	- Rotary knob to A0
	- LED to D4
	- Power up your device

4. Log in and create your device over at [beta.smartLiving.io](http://beta.smartliving.io)
5. Create and configure your *credentials.json* at the root of the project
    
       { 
           "deviceId":"",
           "clientId":"",
           "clientKey":""
       }

6. Hit the upload button
7. Run your project
8. Test the newly created sensor and actuator manually via the web app
	
	*Turn the rotary knob and see updated values on the knob dial*
	
	*The LED is controllable from a toggle button*
	
9. Create an automation rule (Follow the wizard but the logic should read as follows)

	     When 
	     		EdisonStarter.knob > 500
	     Then 
	     		EdisonStarter.Led = True

10. Try out your automation rule!

** This quick start assumes you've already installed the XDK, prepared your controller, and took your Edison on a test flight **
    
## Next steps
- Try out more experiments for Intel controllers that you can find in the repo'!