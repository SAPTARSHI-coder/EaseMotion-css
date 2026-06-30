# CSS-only Animated Vinyl Record Component

A fun and interactive CSS-only vinyl record player component. No JavaScript is required for any of the animations.

## Overview

This component simulates a mini vinyl record player. When the user hovers over the player, the vinyl record begins to spin and the tonearm smoothly rotates from its resting position onto the record, simulating playback. Clicking on the component also animates the volume/tuning knobs.

## Features

- ✨ **100% CSS-only**: Completely relies on CSS transitions and keyframes.
- 🎵 **Interactive Animations**: Tonearm swings into place and the record spins on hover.
- 🎛️ **Click Interactions**: The control knobs rotate slightly when the component is active (clicked).
- 🎨 **Detailed Aesthetics**: Uses `conic-gradient` to simulate realistic reflections on the vinyl record grooves.

## Files

- `demo.html`: The HTML structure forming the record player base, platter, vinyl, tonearm, and controls.
- `style.css`: The styling rules, shadows, and keyframe animations for the spin and tonearm movement.

## Usage

Copy the HTML structure and reference the CSS file. The `.ease-vinyl-container` serves as the main interactive area.

## Customization

You can tweak the variables in `style.css` to match your specific theme:

- **Record Label Color**: Modify `.ease-record-label`'s `background-color` (currently red).
- **Turntable Base Color**: Adjust `.ease-player-base`'s `background-color`.
- **Spin Speed**: Change `animation: ease-spin 1.8s linear infinite;` to adjust playback speed.
