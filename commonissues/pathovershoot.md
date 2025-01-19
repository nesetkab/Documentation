# Path Overshoot at the End
#### You might be wondering, why does my robot drift after reaching the endpoint? 

To combat this, you can convert your Paths into PathChains, by following [this tutorial](pathtopathchain.md), and turn on holdEnd. This allows for the robot to correct **AFTER** the PathChain has been completed, allowing for the robot's heading and position to stay accurate.

