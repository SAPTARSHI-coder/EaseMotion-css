# CSS Gravity Physics Engine

A pure CSS physics simulation that accurately mimics gravity, bouncing (restitution), and squash/stretch mechanics.

## Features

- **Pure CSS**: No JavaScript physics libraries used.
- **Cubic Bezier Tuning**: Utilizes highly customized `cubic-bezier()` timing functions to accelerate the balls downwards (gravity) and decelerate them upwards.
- **Squash & Stretch**: Keyframes at `50%` introduce a `scaleY(0.6) scaleX(1.3)` transform exactly at the floor impact frame to simulate kinetic energy transfer and cartoon physics squash-and-stretch.
- **3D Depth**: Radial gradients and box-shadows give the balls a 3D volumetric feel.

## Preview

Open `demo.html` in your browser to see the gravity engine running.
