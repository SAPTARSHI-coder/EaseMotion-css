# CSS-only Animated Music Equalizer

A dynamic, animated music equalizer visualizer built entirely with CSS. No JavaScript required.

## Overview
This component simulates an active audio visualizer by animating vertical bars at pseudo-random intervals using CSS keyframes and `animation-delay`. The card features a glassmorphism aesthetic, and hovering over it intensifies the animation speed.

## Features
- ✨ 100% CSS-only (no JavaScript)
- 🎵 Multi-bar animated equalizer effect
- 🕒 Pseudo-randomized `animation-duration` and `animation-delay`
- 🎨 Gradient color fills and glassmorphic card design
- ⚡ Interactive hover state to increase animation speed

## Files
- `demo.html`: The HTML structure of the equalizer card.
- `style.css`: The CSS styling and bouncing bar keyframe animations.

## Usage
Simply copy the HTML structure and link the CSS file to use this component. The equalizer bars `.ease-eq-bar` will automatically animate.

## Customization
You can customize the colors by changing the CSS in `style.css`:
- Gradient fill: Modify `linear-gradient(to top, #3b82f6, #06b6d4, #10b981)`
- Intensity on hover: Adjust the `.ease-equalizer-card:hover .ease-eq-bar` animation duration
- Number of bars: Add or remove `.ease-eq-bar` elements in the HTML and add matching `:nth-child` pseudo-selectors in the CSS.
