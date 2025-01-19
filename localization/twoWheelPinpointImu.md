# Setting Up Your Two Wheel + Pinpoint IMU Localizer

## Prerequisites
* A GoBilda Pinpoint Odometry Computer with ONLY an i2c cord to the `i2c` port. We will not use the `x` or `y` ports.
* Two odometry wheels connected to motor encoder ports on a hub.

---
## Steps
### 1. Odometry Wheel Setup
Open the file `TwoWheelPinpointIMULocalizer.java` and configure the following:

1. **Tracking Wheel Positions**: Enter the positions of your tracking wheels relative to the robot's center. Use inches for measurements.
2. **Encoder Ports**: Replace the `deviceName` parameters with the names of the ports connected to your encoders.
3. **IMU Orientation**: Make sure that the Pinpoint has the ports facing up and the GoBilda logo at the front of the Pinpoint.

### 2. Encoder Direction Calibration

Ensure the following:

* The forward encoder ticks up when the robot moves forward.
* The strafe encoder ticks up when the robot moves to the left.

### 3. Localizer Tuning

#### a) Forward Localizer Tuner

1. Position a ruler alongside your robot.
2. Push the robot forward by 48 inches (default distance).
3. The tuner will display two numbers:

    * First number: Distance the robot thinks it has traveled.
    * Second number (multiplier): Replace `FORWARD_TICKS_TO_INCHES` in the localizer with this value.

4. (Optional) Run multiple tests and average the multipliers for better accuracy.

#### b) Lateral Localizer Tuner

1. Position a ruler alongside your robot.
2. Push the robot sideways (strafing) by 48 inches (default distance).
3. The tuner will display two numbers:

    * First number: Distance the robot thinks it has traveled laterally.
    * Second number (multiplier): Replace `STRAFE_TICKS_TO_INCHES` in the localizer with this value.

4. (Optional) Run multiple tests and average the multipliers for better accuracy.

---

## Testing Your Localizer

After completing the tuning steps, test the localizer as follows:

1. Go to Localization Test and drive your robot around.
2. Open the FTC Dashboard at [http://192.168.43.1:8080/dash](http://192.168.43.1:8080/dash).
3. Switch the view to "field view" from the top-right corner dropdown.
4. Observe if the robot's movements appear accurate on the dashboard. Re-run tuning if necessary.

---

## Congratulations on successfully tuning your localizer!
