# XML Configuration

A team may use `.xml` files in order to configure the hardware components of their robot. This allows the configuration to be stored into the
robot's REV Control Hub, allowing the user to avoid having to re-enter all the information in case something happens to the driver station's data. Furthermore, having a record of this in the code repository allows the user to "backup" and access this information very easily.

In order to use xml configuration, a team should complete the following steps:

1. Find the `xml` package in the `res` folder of the `TeamCode` module in your repository. There will already be a file here called `teamwebcamcalibrations.xml` from the FTC SDK.
2. Configure your robot and Lynx Modules (the Control and Expansion hubs).
3. Configure the hardware devices on your robot under the correct hub.
4. Configure any other devices that don't fall under your hubs. This generally includes certain types of webcams and other devices.

The majority of new configuration can be copied and pasted from existing configuration.

Alternatively, teams can configure their robot on the driver station and then extract that information from the robot. There is more information on this below.

## Example XML File

Here is an example `.xml` file:

```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?> <!--This is the xml declaration and can be copy-pasted-->
<!--Author: Havish Sripada - 12808 RevAmped Robotics-->

<!--This declares the robot class, and can be copy-pasted.-->
<Robot type="FirstInspires-FTC">

    <!--This line declares the Control Hub Portal which contains both hubs. It can be copy-pasted-->
    <LynxUsbDevice name="Control Hub Portal" serialNumber="(embedded)" parentModuleAddress="173">

        <!--This line declares the Expansion Hub. We use RS485 connection, so we declare it with a port.-->
        <LynxModule name="Expansion Hub 2" port="2">

            <!--These are the Expansion Hub's motors. Change the ports and names of your motors.-->
            <goBILDA5202SeriesMotor name="intake" port="0"/>
            <goBILDA5202SeriesMotor name="vslideMotorTop" port="2"/>
            <goBILDA5202SeriesMotor name="vslideMotorBottom" port="3"/>
            <goBILDA5202SeriesMotor name="hslides" port="1"/>

            <!--These are the Expansion Hub's servos. Change the ports and names of your servos.-->
            <Servo name="depoTilt" port="1"/>
            <Servo name="depoArm" port="3"/>
            <Servo name="depoWrist" port="5"/>
            <Servo name="VH_MGN_Right" port="0"/>
            <Servo name="depoClaw" port="4"/>
            <Servo name="VH_MGN_Left" port="2"/>

            <!--This is a REV 2m Distance Sensor. Since this is an I^2C device, we require the type of device in the configuration as well.-->
            <REV_VL53L0X_RANGE_SENSOR name="clawDistance" port="0" bus="3" />

            <!--This is a limit switch. Since we plugged it into digital devices, we don't need to specify this in our config.-->
            <DigitalDevice name="vswitch" port="0"/>

            <!--This line signifies that the Expansion Hub configuration has ended.-->
        </LynxModule>

        <!--This line declares the Control Hub and can be copy-pasted.-->
        <LynxModule name="Control Hub" port="173">

            <!--These are the Control Hub's motors. Change the ports and names of your motors.-->
            <goBILDA5202SeriesMotor name="motor_lf" port="0" />
            <goBILDA5202SeriesMotor name="motor_lb" port="1" />
            <goBILDA5202SeriesMotor name="motor_rf" port="2" />
            <goBILDA5202SeriesMotor name="motor_rb" port="3" />

            <!--This is a limit switch. Since we plugged it into digital devices, we don't need to specify this in our config.-->
            <DigitalDevice name="hSwitch" port="0"/>

            <!--This is a REV Color Sensor V3. Since this is an I^2C device, we require the type of device in the configuration as well.-->
            <RevColorSensorV3 name="colorSensor" port="0" bus="2"/>

            <!--This is a GoBilda Pinpoint Computer. Use this to configure your pinpoint if you are using one of the pinpoint localizers.-->
            <goBILDAPinpoint name="pinpoint" port="0" bus="3"/>
            
            <!--These are the Control Hub's servos. Change the ports and names of your servos.-->
            <Servo name="intakeTrapdoor" port="0"/>
            <Servo name="intakeFlipper" port="1"/>
            <Servo name="intakeLock" port="3"/>
            
            <!--This is the built-in Control Hub IMU. Use this if you are using one of the Control Hub IMU localizers.-->
            <ControlHubImuBHI260AP name="imu" port="0" bus="0"/>

            <!--This line signifies that the Control Hub configuration has ended.-->
        </LynxModule>
        
        <!--This line signifies that the Control Hub Portal configuration has ended.-->
    </LynxUsbDevice>
    
    <!--This is the configuration for an Ethernet Device, in this case our Limelight3A.-->
    <EthernetDevice serialNumber="EthernetOverUsb:eth0:172.29.0.25" name="webcam" port="0" ipAddress="172.29.0.1" />
    
    <!--This line signifies that the robot configuration has ended-->
</Robot>
```
There are a few things to note while configuring your robot: 

1. Servos, analog devices, and digital devices generally don't require you to input the specific device model in your configuration, while I<sup>2</sup>C, motors, and devices not in the Control Hub Portal generally require the specific device model.
2. If you have a different device that you're not sure how to configure, or you aren't sure how to configure something, the most sure-fire way is to simply use the driver station and then extract the `.xml` file from the robot's Control Hub. See the next section for more information about this.

Here is a template for configuration:
```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?> <!--This is the xml declaration and can be copy-pasted-->
<!--Author: Havish Sripada - 12808 RevAmped Robotics-->

<!--This declares the robot class, and can be copy-pasted.-->
<Robot type="FirstInspires-FTC">

    <!--This line declares the Control Hub Portal which contains both hubs. It can be copy-pasted-->
    <LynxUsbDevice name="Control Hub Portal" serialNumber="(embedded)" parentModuleAddress="173">

        <!--This line declares the Expansion Hub. We use RS485 connection, so we declare it with a port.-->
        <LynxModule name="Expansion Hub 2" port="2">

            <!--Configure hardware devices here-->

            <!--This line signifies that the Expansion Hub configuration has ended.-->
        </LynxModule>

        <!--This line declares the Control Hub and can be copy-pasted.-->
        <LynxModule name="Control Hub" port="173">

            <!--Configure hardware devices here-->

            <!--This line signifies that the Control Hub configuration has ended.-->
        </LynxModule>

        <!--This line signifies that the Control Hub Portal configuration has ended.-->
    </LynxUsbDevice>

    <!--Put other devices here. Most teams don't need to worry about this unless they are using things like webcams that don't go in the main ports.-->

    <!--This line signifies that the robot configuration has ended-->
</Robot>
```

When configuring hardware devices, the general format is <***Device_Type*** name = ***Device_Name*** port = ***Port_Number***> (where the italicized words are those that need to be changed).

## Extraction From the Control Hub

`.xml` files can also be extracted from the control hub if a team isn't sure how to configure something. This means that you can do all your configuration on the driver station and then pull it to your computer.

In order to do this, a team should complete the following steps:
1. Configure your robot on the driver station.
2. Connect your computer to your robot's Control Hub. Typically, we use a USB to USB-C cable to connect the two. Make sure that the robot is powered on.
3. This interaction will allow you to access the files stored on the Control Hub through your computer. Open the folder that pops up, which is probably called something like `Internal Shared Storage`.
4. Inside this folder, open the `FIRST` folder. Your `.xml` file should appear here (it may appear as a Microsoft Edge HTML Document, but you can continue following the same steps here).
5. Copy and paste the text in this file into a `.xml` file in your repository.
