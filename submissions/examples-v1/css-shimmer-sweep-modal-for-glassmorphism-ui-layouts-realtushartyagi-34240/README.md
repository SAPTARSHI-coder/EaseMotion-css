# CSS Shimmer Sweep Modal for Glassmorphism UI Layouts

A pure CSS modal component featuring a continuous, animated shimmer sweep over a frosted-glass background, designed specifically for modern **Glassmorphism UI** aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, the keyframe animation for the shimmer sweep, and the `backdrop-filter` glass styling.
- `demo.html` – A standalone HTML file demonstrating the modal functionality over a colorful background to highlight the glass effect.

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
<a href="#glass-modal" class="ease-glass-trigger-btn">Open Modal</a>

<!-- Modal Overlay & Content -->
<div id="glass-modal" class="ease-glass-shimmer-modal-overlay">
  <div class="ease-glass-shimmer-modal-content">
    <a href="#" class="ease-glass-shimmer-modal-close">&times;</a>
    <h2>Glass Content</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and glass effects via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.4s` | The speed of the modal overlay fade and content entrance. |
| `--ease-shimmer-duration` | `2.5s` | The speed of the continuous shimmer sweep loop. |
| `--ease-glass-bg` | `rgba(255, 255, 255, 0.15)` | The semi-transparent background color of the glass panel. |
| `--ease-glass-shadow` | `0 8px 32px 0 rgba(31, 38, 135, 0.37)` | The drop shadow giving depth to the glass element. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management (e.g., `isOpen` states) by relying natively on CSS and the URL hash (`:target`). The styling highlights the power of modern CSS filters (`backdrop-filter`) combined with performant `@keyframes` animations, providing a premium UI experience with zero scripting overhead.

---

> **Note:** PR modifies only files inside `submissions/examples/css-shimmer-sweep-modal-for-glassmorphism-ui-layouts-realtushartyagi-34240/`.
