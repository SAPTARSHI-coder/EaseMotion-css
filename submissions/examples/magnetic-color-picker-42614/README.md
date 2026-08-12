# Magnetic Color Picker

## Overview
A responsive, CSS-only color picker inspired by real-estate styling, pairing a native color input, curated palette swatches, a preview panel, and a magnetic hover treatment in a lightweight, accessible layout.

## Installation
1. Open [demo.html](demo.html) directly in a browser.
2. Keep [style.css](style.css) in the same folder so the demo stays self-contained.
3. If you embed the component elsewhere, preserve the relative link to the repository stylesheet and the local stylesheet.

## Usage
```html
<link rel="stylesheet" href="../../../easemotion.css" />
<link rel="stylesheet" href="./style.css" />
```

Then copy the structure from [demo.html](demo.html) into your page. The demo uses native form controls and CSS-only motion, so no JavaScript is required.

## Accessibility
- Uses semantic structure with a main landmark, heading, form controls, and descriptive labels.
- The native color input is clearly labeled and the selected HEX value is announced through an `aria-live` region.
- Swatches and buttons remain keyboard reachable and include visible focus states.
- Motion is reduced automatically when the user prefers less animation.

## Why it fits EaseMotion CSS
This submission reflects the EaseMotion philosophy by blending utility-driven layout and motion with a practical interface pattern. It uses existing card, fade, slide, hover, and button utilities, while keeping the experience lightweight, responsive, and easy to extend.
