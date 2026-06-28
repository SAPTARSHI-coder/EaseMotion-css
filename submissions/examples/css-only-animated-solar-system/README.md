# CSS-only Animated Solar System Component

A beautiful and mesmerizing CSS-only animation of a mini solar system. No JavaScript required.

## Overview
This component simulates the inner solar system (and a couple of gas giants) revolving around a pulsating Sun. It features a rich starfield background, distinct orbital paths, inner and outer planets, a moon orbiting Earth, and planetary details like Saturn's rings and Jupiter's atmospheric bands.

## Features
- ✨ **100% CSS-only**: Uses `transform: rotate` and `@keyframes` for continuous orbital motion.
- 🌞 **Pulsing Sun**: A glowing sun using `radial-gradient` and animated `box-shadow` values.
- 🌍 **Nested Orbits**: The Moon orbits Earth independently while Earth orbits the Sun.
- 🪐 **Planetary Details**: Custom sizes, colors, shadows for depth, and rings for Saturn.
- ⏸️ **Interactive Hover**: Hovering over the solar system pauses the orbits so you can inspect the planets.

## Files
- `demo.html`: The HTML structure containing nested containers for orbits and planets.
- `style.css`: The styling rules, gradients, shadows, and keyframe animations driving the system.

## Usage
Simply copy the HTML structure and reference the CSS file. The `.ease-solar-system-container` fits into any full-screen or sized wrapper. Note that the dimensions of orbits are absolute in this example, but can be converted to percentages for responsive scaling.

## Customization
- **Orbit Speeds**: Change the `animation-duration` for `.ease-orbit-*` classes to speed up or slow down the planets.
- **Starfield**: The background stars are created using multiple `radial-gradient` layers. You can adjust their size and colors to change the mood of the deep space.
- **Planets**: Adjust `background-color`, `box-shadow` for the terminator line (day/night shadow), or `width/height` to rescale.
