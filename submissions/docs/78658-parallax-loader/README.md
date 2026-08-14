# Parallax Loader

Documentation and a standalone demonstration for the Parallax Loader component requested in issue #78658.

## Overview

The Parallax Loader adds layered depth to a loading indicator by moving visual layers at different rates. The effect gives feedback without requiring a heavy animation dependency.

## Demo

Open `demo.html` to preview the loader and its status message. The example keeps the animated layers decorative while the status remains readable.

## Usage

Use the loader while content is unavailable and remove it when loading finishes. Keep the status text separate from decorative layers so the component can be integrated into different layouts.

## Accessibility

The status text communicates the loading state independently of the visual effect. The animation is simplified for users who prefer reduced motion.

## Customization

Adjust layer offsets, size, animation timing, and spacing in `style.css`. The component scales down cleanly on smaller viewports.

## Files

- `demo.html` — complete loader example.
- `style.css` — parallax and responsive styles.
- `README.md` — usage and accessibility documentation.