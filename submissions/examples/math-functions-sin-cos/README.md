# math-functions-sin-cos

## Overview

Demonstrates CSS trigonometric math functions `sin()`, `cos()`, and `tan()` for layout and animation. Includes a circular orbit animation using `sin()` and `cos()`, a sine wave bar chart computed with `sin()`, multi-body orbit rings, and a reference table of common angle values.

## Usage

Open `demo.html` in a browser that supports CSS trigonometric functions (Chrome 111+, Firefox 108+, Safari 15.4+). The orbit and multi-orbit sections use CSS animations with trigonometric positioning. The wave section uses `sin()` to compute bar heights dynamically.

## Features

- Single orbit animation using `rotate` + `translateX` for circular motion
- Sine wave bar chart with heights computed via `sin()` and custom properties
- Three-body orbit system with different radii and periods
- Reference value grid for common angles (0°, 30°, 45°, 60°, 90°, 180°)
- `prefers-reduced-motion` freezes animations at static positions
- Dark theme with green accent and blue section headers
