# CSS Shimmer Sweep Modal for Cyberpunk Neon Layouts

A pure CSS modal component featuring a continuous, high-contrast shimmer sweep animation over a dark, glowing interface, designed specifically for **Cyberpunk Neon** aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, the keyframe animation for the bright shimmer sweep, and the glowing neon box shadows/borders.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a stylized cyberpunk environment.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`.

```html
<!-- Trigger -->
<a href="#cyber-modal" class="ease-neon-trigger-btn">Initialize</a>

<!-- Modal Overlay & Content -->
<div id="cyber-modal" class="ease-neon-shimmer-modal-overlay">
  <div class="ease-neon-shimmer-modal-content">
    <a href="#" class="ease-neon-shimmer-modal-close">&times;</a>
    <h2>System Override</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and neon colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.3s` | The speed of the modal overlay fade and content entrance. |
| `--ease-shimmer-duration` | `2s` | The speed of the continuous glowing shimmer sweep loop. |
| `--ease-cp-neon-cyan` | `#0ff` | The primary cyan neon color for borders and text shadows. |
| `--ease-cp-neon-pink` | `#f0f` | The secondary pink neon color used in accents and the shimmer effect. |

## Why it fits EaseMotion CSS
This component entirely removes the need for JavaScript state management by utilizing the CSS `:target` pseudo-class for interactivity. The shimmer animation uses an infinite `@keyframes` loop moving a high-contrast `linear-gradient` across a pseudo-element. This delivers a highly performant, visually striking micro-interaction that perfectly fits a bold, futuristic UI.

---

> **Note:** PR modifies only files inside `submissions/examples/css-shimmer-sweep-modal-for-cyberpunk-neon-layouts-realtushartyagi-34242/`.
