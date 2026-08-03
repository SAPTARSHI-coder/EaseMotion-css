# Catapult Theme Picker

## Overview
A responsive, CSS-only theme picker inspired by social media dashboards, featuring three selectable themes, preview thumbnails, and a catapult-style lift animation for active and hovered cards.

## Installation
1. Open [demo.html](demo.html) directly in a browser.
2. Keep [style.css](style.css) in the same folder so the demo remains self-contained.
3. If you embed the component elsewhere, preserve the local stylesheet links and repository stylesheet reference.

## Usage
```html
<link rel="stylesheet" href="../../../easemotion.css" />
<link rel="stylesheet" href="./style.css" />
```

Then include the semantic markup from [demo.html](demo.html). The theme switcher uses radio inputs and CSS animation only, so no JavaScript is required.

## Accessibility
- Uses semantic structure with a heading, fieldset, legend, radio inputs, and a descriptive button.
- The selected state is clearly indicated with a visible dot and strong border styling.
- The layout remains usable on mobile and reduces motion for users who prefer less animation.

## Why it fits EaseMotion CSS
This submission aligns with the EaseMotion philosophy by combining card, fade, slide, hover, spacing, and button utilities with a lightweight component pattern that feels polished and reusable.
