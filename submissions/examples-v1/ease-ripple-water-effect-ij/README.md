# Ripple Water Effect

A clickable pond surface that creates expanding ripple circles at the click position. JS creates ripple elements with `--rp-x`, `--rp-y`, and `--rp-size` CSS variables. CSS handles the scale and opacity animation.

## Features

- Expanding ripple circle on click
- Position via `--rp-x` and `--rp-y` CSS variables
- Size via `--rp-size` CSS variable
- Auto-removes animation after completion
- Gradient water surface background

## Usage

Click the pond. JS creates a `.ripple-circle` div with position and size set as CSS variables. The `@keyframes rippleGrow` animation scales from 0 to 1 with opacity fade-out.
