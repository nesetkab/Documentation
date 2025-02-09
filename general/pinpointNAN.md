# Pinpoint NAN Safeguard

This page underlines how Pedro Pathing safeguards against the Pinpoint's NAN errors. Here is the method we created to do this.

```java
private Pose getPoseEstimate(Pose2D pinpointEstimate, Pose currentPose, long deltaTime) {
        if (Double.isNaN(pinpointEstimate.getX(DistanceUnit.INCH)) || Double.isNaN(pinpointEstimate.getY(DistanceUnit.INCH)) || Double.isNaN(pinpointEstimate.getHeading(AngleUnit.RADIANS))) {
            pinpointCooked = true;
            return MathFunctions.addPoses(currentPose, new Pose(currentVelocity.getX() * deltaTime / Math.pow(10, 9), currentVelocity.getY() * deltaTime / Math.pow(10, 9), currentVelocity.getHeading() * deltaTime / Math.pow(10, 9)));
        }

        Pose estimate = new Pose(pinpointEstimate.getX(DistanceUnit.INCH), pinpointEstimate.getY(DistanceUnit.INCH), pinpointEstimate.getHeading(AngleUnit.RADIANS));

        pinpointCooked = false;
        return estimate;
    }
```

This method gives us the new pose estimate and is called in the `PinpointLocalizer` class. If the localizer detects that the pinpoint is reporting NAN values, we count this as a corrupted reading. This means we don't want to use these values, but we also want to account for the robot's movement. We therefore use a first-derivative (tangent line) approximation, using our previous velocity to estimate our robot's current position on the field. This allows us to make a solid prediction about how much the robot has moved, and your robot will be able to continue running your auto paths.