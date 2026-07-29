# CSS-only Animated Fingerprint Scanner

A sci-fi inspired, animated fingerprint scanner component built entirely with CSS. No JavaScript required.

## Overview
This component features a high-tech UI element with a fingerprint icon. Upon hovering, a bright neon scanning laser sweeps across the fingerprint, the icon illuminates, and an "AUTHENTICATING..." text begins to pulse. The component makes use of CSS keyframe animations, SVG styling, and pseudo-elements.

## Features
- ✨ 100% CSS-only (no JavaScript)
- 🔒 Custom SVG fingerprint icon integration
- 💥 Neon glowing laser scan animation (`ease-scan-anim`)
- 🏁 Tech-inspired grid background and corner bracket decorations
- 🕹️ Interactive hover states triggering multiple simultaneous animations

## Files
- `demo.html`: The HTML structure of the fingerprint scanner UI.
- `style.css`: The CSS styling, glowing effects, and scanning animations.

## Usage
Simply copy the HTML structure and link the CSS file. The component uses the `Share Tech Mono` font from Google Fonts for its sci-fi aesthetic, but it can easily be swapped.

## Customization
Adjust the neon colors by modifying the CSS variables or hex codes in `style.css`:
- Scanner laser color: `#38bdf8` (Light Blue)
- Dark background and grid: `#0a1128` (Navy Blue)
- Scan animation speed: Change `2s` in the `.ease-scanner-line` animation property.
