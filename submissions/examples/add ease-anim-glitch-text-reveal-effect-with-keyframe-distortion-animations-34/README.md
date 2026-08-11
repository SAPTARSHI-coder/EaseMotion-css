# Glitch Text Reveal Effect with Keyframe Distortion Animations (Cyberpunk Theme)

A state-of-the-art cyberpunk text reveal component built with modern CSS properties. It simulates digital corruption and chromatic aberration through complex keyframe animations and `clip-path` masks.

## Features

- **Keyframe Distortion Animation**: Utilizes intricate CSS `@keyframes` with `clip-path: inset()` to slice and offset sections of text, creating a realistic digital glitch effect.
- **Chromatic Aberration**: Leverages `::before` and `::after` pseudo-elements colored with Neon Red (`#ff003c`) and Neon Blue (`#00f0ff`) text shadows to simulate color splitting.
- **Cyberpunk UI Aesthetics**: Features a glassmorphism container (`backdrop-filter`) with glowing neon yellow corner brackets and a dark, tech-inspired grid background.
- **Interactive Re-trigger**: A lightweight JavaScript snippet re-triggers the glitch sequence when the user hovers over the text block.

## Files Included

- `demo.html`: The HTML layout featuring the data-attribute text setup and the hover re-trigger script.
- `style.css`: The styling including the complex CSS keyframes, pseudo-elements, and the overarching cyberpunk theme variables.

## Usage Guide

1. Open `demo.html` in your web browser to view the effect.
2. The text glitch animation triggers automatically upon loading.
3. Move your mouse over the text wrapper to re-trigger the glitch animation seamlessly.
4. To modify the glitched text, simply change both the text content and the `data-text` attribute within the `<h1>` tag in `demo.html`.
