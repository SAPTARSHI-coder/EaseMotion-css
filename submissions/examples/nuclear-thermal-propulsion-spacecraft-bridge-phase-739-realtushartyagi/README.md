# UI Design: Nuclear Thermal Propulsion Spacecraft Bridge (Phase #739)

A complete, responsive, 60fps HTML/CSS UI design showcase for a sci-fi spacecraft bridge dashboard focusing on Nuclear Thermal Propulsion (NTP) reactor controls. Built using EaseMotion CSS principles, it features continuous spinning reactor rings, pulsating plasma effects, SVG orbit drawing, and staggered HUD panel entrances rendered in a dark, high-contrast, neon-glow aesthetic. Zero JavaScript is required for the animations.

## 📦 What's included?

- `demo.html`: The complete single-page interactive UI layout.
- `style.css`: The custom stylesheet powering the HUD layout, typography, glows, and all keyframe animations.
- `README.md`: This documentation file.

## 🛠 Features & Animations

- **Staggered Panel Entrances**: The left and right telemetry/command panels fade and slide up using the signature `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. The stagger is controlled dynamically via a `--panel-delay` custom property.
- **Reactor Core Visualization**: The center viewport features three concentric `.ease-ring` elements spinning at different rates and directions (linear `transform: rotate`), framing a pulsating central plasma core (`radial-gradient` with `filter: blur` and `scale` throbbing).
- **Telemetry Bar Fills**: Progress bars for core temp and pressure animate their fill levels on load using `transform: scaleX(1)` with `transform-origin: left`, providing a smooth, hardware-accelerated entrance.
- **SVG Orbit Simulation**: The trajectory panel uses SVG `stroke-dasharray` and `stroke-dashoffset` keyframes to draw a transfer orbit path continuously, while a ship marker translates along the route.
- **CRT / HUD Aesthetic**: The entire layout is wrapped in a subtle global flicker animation and an overlay of scanlines generated purely with CSS `linear-gradient` backgrounds.

## 🚀 How to use

Simply open `demo.html` in any modern web browser. 

The CSS is completely self-contained. To extract specific animations for your own projects, look for the following keyframes in `style.css`:
- `@keyframes ease-spin-slow` / `ease-spin-fast` (Reactor rings)
- `@keyframes ease-plasma-throb` (Core pulsing effect)
- `@keyframes ease-draw-orbit` (SVG line drawing)
- `@keyframes ease-fill-bar` (Telemetry bar entrance)

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A spacecraft bridge HUD relies heavily on communicating state through motion. By animating the reactor rings with continuous linear rotation and the core with an ease-in-out throb, the UI conveys immense kinetic energy and heat non-verbally. The spring-based entrances of the HUD panels prevent the interface from feeling like a static webpage, instead making it feel like a complex avionics system booting up sequentially.
