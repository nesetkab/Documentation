# Setting Up Your Road Runner to Pedro Localizer

## Prerequisites
* A properly configured Road Runner localizer.
* Required dependencies added to your project.

---

## Steps
### 1. Enable the Road Runner to Pedro Adapter

1. Open the following files:
   * `RoadRunnerEncoder.java`
   * `RoadRunnerThreeWheelLocalizer.java`
   * `RRToPedroThreeWheelLocalizer.java`

2. Uncomment the code by:
   * Selecting all text in each file (`Ctrl + A`).
   * Pressing `Ctrl + /` to uncomment.

### 2. Add Dependencies

Go to the `build.gradle` file under the `teamcode` folder and add these dependencies:

```gradle
implementation 'org.apache.commons:commons-math3:3.6.1'
implementation 'com.acmerobotics.com.roadrunner:core:0.5.6'
```

### 3. Customize Parameters
If needed, adjust parameters in the RRToPedroThreeWheelLocalizer.java file to match your robot’s configuration. For example:

Ensure encoder positions and wheel radii are accurate.
Verify that all encoder directions and IMU orientations align with your robot's physical setup.

---
## Testing Your Localizer

After completing the setup:

1. Go to Localization Test and drive your robot around.
2. Open the FTC Dashboard at [http://192.168.43.1:8080/dash](http://192.168.43.1:8080/dash).
3. Switch the view to "field view" from the top-right corner dropdown.
4. Observe if the robot's movements appear accurate on the dashboard. Re-run the setup if necessary.

---

## Congratulations on successfully setting up your localizer!
