# Setting Up ADB for FIRST Tech Challenge

This guide provides a step-by-step process to set up ADB (Android Debug Bridge) and use it effectively in a FIRST Tech Challenge (FTC) scenario.

---

## 1. Introduction to ADB
ADB is a versatile command-line tool that allows developers to communicate with and control Android devices. It is particularly useful for debugging and deploying code on the FTC Driver Station or Robot Controller.

---

## 2. Installing ADB

### Step 1: Find the plugin. 
- In your IDE, go to [Settings] > [Plugins] and search for "ADB Wi-fi."
- Make sure you are connected to your home Wi-Fi network and in the marketplace tab of the plugin manager.
- You should see one created by Yury Polek. 
- You can also go to the homepage of the plugin [here](https://plugins.jetbrains.com/plugin/14969-adb-wi-fi).

### Step 2: Install the plugin. 
- Download the plugin, click on "Apply" on the bottom right of the plugin page, and once it is done, restart your IDE.
- You should now see a new tab on the bottom right of your IDE called "ADB Wi-fi."
- If it is not visible, you can go to [View] > [Tool Windows] > [ADB Wi-fi].

### Step 3: Connecting to the robot
- **In the IDE**
    1. Connect to your robot's Wi-Fi network.
    2. Go to the "ADB Wi-fi" tab.
    3. Your device should appear in the list, if it doesn't, click on the Restart ADB button.
  4. Click on the device and then click on the "Connect" button.
  5. You should now be connected to your robot, as shown on the top of the IDE (you should see that you are connected to your hub and that you can push code to it).
- **Command Line**
    1. Connect to your robot's Wi-Fi network.
  2. Open a terminal/command prompt and run:
      ```bash
      adb connect 192.168.43.1:5555
      ```
     - This is the IP address of your control hub.
    3. You should now see your device in the ADB tab. 
  4. Click on the device and then click on the "Connect" button.
  5. You should now be connected to your robot, as shown on the top of the IDE (you should see that you are connected to your hub and that you can push code to it).

### Step 4: General Guidelines
- When turning off the robot, make sure to click on the "Disconnect" button in the ADB Wi-Fi tab **first**.
- If you are having trouble connecting, try restarting the ADB server by clicking on the "Restart ADB" button.
- If you are still having trouble connecting, try to wait a couple of minutes, disconnect from the Wi-Fi network, turn off your computer, and then reconnect.
- ADB is **always** finicky, so it may work one day but not work the next. 