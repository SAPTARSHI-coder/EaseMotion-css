# CSS Jello-Hover Modal for Marketing Landing Page Layouts

A pure CSS modal component featuring a subtle, engaging "jello-hover" animation, styled specifically for clean, vibrant **Marketing Landing Page** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and a custom `@keyframes ease-marketing-jello` animation that creates a soft wobble effect on `:hover`.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a typical marketing hero section layout.

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
<a href="#promo-modal" class="ease-marketing-trigger-btn">Get Started Now</a>

<!-- Modal Overlay & Animated Content -->
<div id="promo-modal" class="ease-jello-marketing-modal-overlay">
  <div class="ease-jello-marketing-modal-content">
    <a href="#" class="ease-jello-marketing-modal-close">&times;</a>
    <h2>Special Offer</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and marketing aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-jello-timing` | `0.9s` | The total duration of the jello wobble animation on hover. |
| `--ease-marketing-primary` | `#6366f1` | Vibrant primary accent color (Indigo). |
| `--ease-marketing-secondary` | `#ec4899` | Vibrant secondary accent color (Pink). |

## Why it fits EaseMotion CSS
This component removes the need for JavaScript interaction observers by utilizing the CSS `:target` pseudo-class for state and the `:hover` pseudo-class for interactive micro-animations. The "jello" effect uses a complex `@keyframes` sequence modifying the `transform: scale3d()` property to create a tactile oscillation. This provides an engaging, 60fps micro-interaction that encourages user interaction on marketing pages without requiring any JS libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-jello-hover-modal-for-marketing-landing-page-layouts-realtushartyagi-34081/`.
