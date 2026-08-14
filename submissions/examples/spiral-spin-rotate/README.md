# Spiral Spin Rotate Animation

## Overview

This submission demonstrates a reusable **Spiral Spin Rotate** animation using pure CSS. The element performs a smooth 360° spiral rotation with subtle scaling for added depth.

## Features

- Pure CSS animation
- Spiral rotation effect
- Hardware-accelerated using `transform`
- CSS keyframes
- Configurable timing using CSS variables
- `prefers-reduced-motion` support
- Responsive demo

## Customization

```css
--ease-duration: 900ms;
--ease-timing: ease-in-out;
```

## Demo

Open `demo.html` directly in any modern browser.

## Files

- demo.html
- style.css
- README.md

## Notes

All files are contained entirely within `submissions/` to comply with the repository contribution guidelines.
# Spiral Spin Rotate

## What does this do?
This adds a smooth spiral spinning entrance animation that rotates and scales an element into view.

## How is it used?
Apply the class `ease-anim-spiral-spin-rotate` to any element:
```html
<div class="ease-anim-spiral-spin-rotate"></div>
```
You can optionally configure its duration and easing:
```html
<div class="ease-anim-spiral-spin-rotate" style="--ease-duration: 0.8s; --ease-timing: ease-in-out;"></div>
```

## Why is it useful?
It provides a playful, dynamic entrance effect suitable for modal dialogs, achievement badges, or featured icons, adhering to EaseMotion's emphasis on configurable, hardware-accelerated fluid motion.
