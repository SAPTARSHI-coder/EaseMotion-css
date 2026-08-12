# CSS Shimmer Sweep Modal for Creative Portfolio Layouts

A pure CSS modal component featuring a continuous, animated shimmer sweep over the background, styled specifically for **Creative Portfolio** aesthetics (high contrast, stark black and white, sleek overlays).

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the keyframe animation for the shimmer sweep.
- `demo.html` – A standalone HTML file demonstrating the modal functionality without JavaScript.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`. The shimmer sweep begins continuously as soon as the modal opens.

```html
<!-- Trigger -->
<a href="#portfolio-modal" class="ease-shimmer-trigger-btn">Discover</a>

<!-- Modal Overlay & Content -->
<div id="portfolio-modal" class="ease-shimmer-modal-overlay">
  <div class="ease-shimmer-modal-content">
    <!-- Close Button links to # to remove the target -->
    <a href="#" class="ease-shimmer-modal-close">&times;</a>
    <h2>Creative Work</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and shimmer speed via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.5s` | The speed of the modal overlay fade and content entrance. |
| `--ease-shimmer-duration` | `2.5s` | The speed of the continuous shimmer sweep loop. |
| `--ease-cp-shimmer` | `rgba(255, 255, 255, 0.1)` | The base color of the shimmer gradient. |

## Why it fits EaseMotion CSS
This component perfectly aligns with the **zero JavaScript overhead** philosophy. By utilizing the CSS `:target` pseudo-class, it manages state (open/close) natively in the browser. The `transform` properties are hardware-accelerated, and the shimmer sweep provides a premium, high-quality animation loop that requires absolutely no event listeners or JavaScript logic.

---

> **Note:** PR modifies only files inside `submissions/examples/css-shimmer-sweep-modal-for-creative-portfolio-layouts-realtushartyagi-34246/`.
