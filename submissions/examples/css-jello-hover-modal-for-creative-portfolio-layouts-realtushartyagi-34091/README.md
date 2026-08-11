# CSS Jello-Hover Modal for Creative Portfolio Layouts

A pure CSS modal component featuring a playful, interactive "jello-hover" animation, styled specifically for bold, brutalist-inspired **Creative Portfolio** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and a custom `@keyframes ease-jello` animation that distorts the scale and skew on `:hover`.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a bold, typographic portfolio layout.

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
<a href="#contact-modal" class="ease-portfolio-trigger-btn">Let's Talk</a>

<!-- Modal Overlay & Animated Content -->
<div id="contact-modal" class="ease-jello-portfolio-modal-overlay">
  <div class="ease-jello-portfolio-modal-content">
    <a href="#" class="ease-jello-portfolio-modal-close">&times;</a>
    <h2>Hover Me!</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and portfolio colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-jello-timing` | `0.9s` | The total duration of the jello wobble animation on hover. |
| `--ease-portfolio-bg` | `#121212` | Dark background color for contrasts. |
| `--ease-portfolio-accent` | `#ff4757` | Vibrant accent color (e.g., Coral/Red) for highlights and buttons. |

## Why it fits EaseMotion CSS
This component removes the need for JavaScript interaction observers or state management by utilizing the CSS `:target` pseudo-class for state and the `:hover` pseudo-class for interactive micro-animations. The "jello" effect uses a complex `@keyframes` sequence modifying the `transform` property to create a highly tactile, squishy oscillation. This provides a fun, engaging 60fps micro-interaction that perfectly fits creative, out-of-the-box UI aesthetics, executed entirely in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-jello-hover-modal-for-creative-portfolio-layouts-realtushartyagi-34091/`.
