# CSS Shimmer Pulse Modal (Neumorphic Soft Layouts)

## Overview
This directory contains a pure CSS implementation of a modal component featuring a "Shimmer Pulse" transition tailored for Neumorphic Soft design layouts. It requires zero JavaScript to trigger, utilizing the `:target` CSS pseudo-class for state management.

## Features
- **Neumorphic Aesthetics:** Uses soft box-shadows (inset and outset) on a low-contrast background to create extruded/pressed elements.
- **Shimmer Pulse Animation:** Combines a continuous pulse (scale and shadow intensity) with a shimmering light sweep across the element.
- **Zero JavaScript:** Fully controlled via CSS `:target`.
- **Responsive:** Fluid sizing up to a `max-width`.

## Usage
Simply include the `style.css` in your project.
Trigger the modal using an anchor tag pointing to the modal's ID.

```html
<a href="#neumorphic-modal" class="demo-trigger-btn">Open Modal</a>
```

See `demo.html` for a full structural example.

## Issue Reference
Closes #38469
