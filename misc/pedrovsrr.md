# Pedro Pathing vs Road Runner #

**Pedro Pathing** is a path-following library (created early 2024, last updated 12/30/24)

It uses a custom algorithm to follow trajectories with speed as a top priority.

Docs: <https://pedropathing.com/>

Quickstart: <https://github.com/Pedro-Pathing/Quickstart>

Library Repo: <https://github.com/Pedro-Pathing/PedroPathing>

Discord: <https://discord.gg/2GfC4qBP5s>

Visualizer: <https://pedro-path-generator.vercel.app/>

**Pros of Pedro:**

- Makes your bot drive faster
- Support for recent sensors (SparkFun OTOS, GoBiLDA Pinpoint) is official/built in
- Strong correction for unexpected disturbances regardless of robot speed
- Runs Async out of the box

**Cons of Pedro:**

- Newer, so potentially less stable
- Smaller community of users (around 500 people in their Discord)
- Uses nonstandard coordinate system in visualizer

---

**Road Runner** is a motion profiling-based follower library
that includes a command-based action system and geometry.

It was originally (0.5) released in late 2020(?),
with version 1.0 created mid-2023 and last updated 10/13.

It prioritizes time consistency above all else.

Library Repo: <https://github.com/acmerobotics/road-runner/>

Quickstart: <https://github.com/acmerobotics/road-runner-quickstart/tree/master/>

Official Docs: <https://rr.brott.dev/docs/v1-0/installation/>


**Pros of Roadrunner:**

- Very stable, minimal bugs if any
- Lots of support; someone has almost certainly had your problem before
- Many example projects

**Cons of Roadrunner:**

- Generally slower by default
- Prioritizes time consistency above all else, meaning that correction will suffer as robot speed increases.
- Support for recent sensors like the OTOS and Pinpoint is unofficial
  (though still exists, made by j5155)

# Summary Table #

| Feature                 | Pedro Pathing                        | Road Runner                           |
|-------------------------|--------------------------------------|---------------------------------------|
| **Primary Focus**       | Speed and adaptability               | Time consistency                      |
| **Sensor Support**      | Official for OTOS, Pinpoint          | Unofficial (community-made)           |
| **Community Size**      | ~500 users                           | Large and established                 |
| **Correction Handling** | Very responsive to external forces   | Decent at correction                  |
| **Stability**           | Newer, less tested                   | Mature, highly stable                 |

*Note: Both libraries excel in their specialized areas and cater to different needs. Choose the one that aligns with your priorities.*

<sub> Original concepts written by J5155, Modifed/Edited by Baron and Iris <3 <sub>