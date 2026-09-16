# Text Highlight Animate

Words highlight with a diagonal sweep animation triggered on scroll. Each word uses `background-size` and `background-position` transition for the sweep effect.

## Features

- Scroll-triggered word highlight
- Sweep animation via `background-size` and `background-position`
- Customizable highlight color, duration, and opacity via CSS custom properties
- Re-triggers when word scrolls out and back into view

## Usage

Add `.tha-word` spans inside a container. When a word enters the viewport, add `.tha-visible` class via JavaScript to trigger the sweep animation.
