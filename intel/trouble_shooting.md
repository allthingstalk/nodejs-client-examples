# Troubleshooting

So something has gone wrong. It happens, but here's a few things that can you help you find what's happening.

## I cannot find my controller via the XDK discovery

## The project cannot find *request*

### Assets are not created under my device in the SmartLiving Web App

Verify the unique ID’s (**Line 36**) in your sketch. make sure heck you have identical Unique ID and API keys copied from your account.

### Data is not shown from my sensor or I can't control my actuators

- Verify if sensor and actuator are connected to the correct ports and correspond with the ports defined in the sketch (**Line 44**).
- Check if you are sending the data in the correct format, as specified when defining the assets (**Line 67**). Ex: if you defined an 'int', but are sending the value 'a test'
