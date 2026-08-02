# Premium Interactive Aurora Background

## Overview
A high-performance, full-screen **Aurora Background** effect with an interactive starry night sky and mouse-responsive cursor spotlight. Built with vanilla CSS gradient animation, glassmorphism UI, and lightweight 60fps JavaScript interaction.

## Features
- **Full-Screen Aurora Background**: Glowing, sweeping emerald, teal, and cyan light ribbons (`.aurora1`, `.aurora2`, `.aurora3`) animating across the entire viewport using `mix-blend-mode: screen`.
- **Interactive Cursor Spotlight**: A dynamic aurora light spotlight (`.aurora-cursor`) that fluidly tracks mouse pointer coordinates in real-time.
- **Natural Inner Card Aurora**: Sleek crystal glass hero card with morphing inner aurora waves (`.hero-aurora1`, `.hero-aurora2`) and cursor tracking spotlight (`.hero-aurora-cursor`).
- **Starry Night Canvas**: Crisp, repeating CSS radial-gradient star field overlaid on a dark night sky gradient.
- **60fps Liquid Lerp Animation**: Lightweight JavaScript loop using `requestAnimationFrame` for silky smooth motion responsiveness.
- **Premium Typography**: Modern typography using Inter from Google Fonts.

## Files
- `demo.html` – Clean HTML5 structure containing the background canvas, aurora layers, crystal glass hero card, and interactive script.
- `style.css` – Production-ready CSS featuring keyframe animations, glassmorphism, responsive typography, and z-index layer hierarchy.
- `README.md` – Project documentation.

## How to Use
1. Open `demo.html` in any modern web browser.
2. Move your mouse across the screen to see the full-screen aurora lights and cursor spotlight react dynamically.
3. Use your mouse scroll wheel to subtly tilt and shift the background aurora layers.

## Customization Tips
- **Aurora Hues**: Modify the `rgba(...)` values in `.aurora1`, `.aurora2`, `.aurora3`, or `.aurora-cursor` in `style.css` to customize the glow colors.
- **Cursor Sensitivity**: Adjust the lerp factor (`0.12` or `0.08`) in `demo.html` script to change responsiveness speed.
- **Glass Intensity**: Edit `.hero` backdrop-filter or border opacity to adjust glassmorphism blur and transparency.

## License
MIT – Free to use, modify, and distribute.
