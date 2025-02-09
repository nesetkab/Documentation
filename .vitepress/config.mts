import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Pedro Pathing',
  description: 'Pedro Pathing Documentation',
base: '/',
head: [["link", {rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}]],
lastUpdated: true,
  themeConfig: {
editLink: {
      pattern: 'https://github.com/Pedro-Pathing/Documentation/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
nav: [
            {text: "Home", link: "/"},
            {text: "Setup", link: "/prerequisites"},
            {text: "JavaDoc", link:"https://pedropathing.com/java/index.html"},
            {text: "Quickstart", link: "https://github.com/Pedro-Pathing/Quickstart/"},
            {text: "Discord", link: "https://discord.gg/2GfC4qBP5s"}
        ],
    sidebar: [
      {
        text: 'Setup',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Prerequisites', link: '/prerequisites' },
          { text: 'Migrating from the Old Quickstart', link: '/migrating' },
        ],
      },
      {
        text: 'Localization',
        items: [
          { text: 'Pick your localizer', link: '/localization/pick' },
          { text: 'Setup your localizer', link: '/localization/setup' },
          { text: 'Drive Encoder Localizer', link: '/localization/driveEncoder' },
          { text: 'Two Wheel Localizer', link: '/localization/twoWheel' },
          { text: 'Three Wheel Localizer', link: '/localization/threeWheel' },
          { text: 'Three Wheel + IMU Localizer', link: '/localization/threeWheelImu' },
          { text: 'OTOS Localizer', link: '/localization/otos' },
          { text: 'Pinpoint Localizer', link: '/localization/pinpoint' },
        ],
      },
      {
        text: 'Automatic Tuners',
        items: [
          { text: 'Prerequisites', link: '/automatic/prerequisites' },
          { text: 'Forward Velocity', link: '/automatic/forwardvelocity' },
          { text: 'Strafe Velocity', link: '/automatic/strafevelocity' },
          { text: 'Forward Zero Power', link: '/automatic/forwardzeropower' },
          { text: 'Lateral Zero Power', link: '/automatic/lateralzeropower' },
        ],
      },
      {
        text: 'PIDF Tuners',
        items: [
          { text: 'Intro', link: '/pidf/intro' },
          { text: 'Translational', link: '/pidf/translational' },
          { text: 'Heading', link: '/pidf/heading' },
          { text: 'Drive', link: '/pidf/drive' },
          { text: 'Centripetal', link: '/pidf/centripetal' },
          { text: 'Test', link: '/pidf/test' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Writing a PedroPathing Autonomous', link: '/examples/buildauto' },
          { text: 'Example Auto', link: '/examples/auto' },
          { text: 'Example Teleop', link: '/examples/teleop' },
        ],
      },
      {
        text: 'Common Issues',
        items: [
          { text: 'Path Overshoots at the End', link: '/commonissues/pathovershoot' },
          { text: 'Convert Path(s) to a PathChain', link: '/commonissues/pathtopathchain' },
        ],
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Local Changes to the Library', link: '/misc/localchanges' },
          { text: 'Constants Class Overview', link: '/misc/constants' },
          { text: 'Callbacks', link: '/misc/callbacks' },
          { text: 'Discord Shortcuts', link: '/misc/shortcuts' },
        ],
      },
      {
        text: 'General FTC',
        items: [
          { text: 'ADB Tutorial', link: '/general/adb' },
          { text: 'XML Configuration Tutorial', link: '/general/xml' },
          { text: 'Pinpoint NAN Error', link: '/general/pinpointNAN' },
        ],
      },
    ],
  },
});
