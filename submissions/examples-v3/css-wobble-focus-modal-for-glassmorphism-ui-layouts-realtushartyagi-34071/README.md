# CSS Wobble-Focus Modal for Glassmorphism UI Layouts

A pure CSS modal component featuring a playful "wobble-focus" micro-interaction, styled specifically for trendy, frosted **Glassmorphism** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and a custom `@keyframes ease-glass-wobble` animation that triggers when the modal contents receive focus (via `:focus-within`).
- `demo.html` – A standalone HTML file demonstrating the modal functionality set against a vibrant background to showcase the glass blur effect.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This modal uses the CSS `:target` pseudo-class to open and close. Your trigger button should be an `<a>` tag that links to the modal's `id`. When a user clicks or tabs into an input element inside the modal, the `:focus-within` selector triggers the wobble effect.

```html
<!-- Trigger -->
<a href="#subscribe-modal" class="ease-glass-trigger-btn">Open Form</a>

<!-- Modal Overlay & Animated Content -->
<div id="subscribe-modal" class="ease-wobble-glass-modal-overlay">
  <div class="ease-wobble-glass-modal-content">
    <a href="#" class="ease-wobble-glass-modal-close">&times;</a>
    <h2>Stay in the loop</h2>
    <!-- Focus this input to trigger the wobble -->
    <input type="email" class="ease-glass-input" placeholder="Email" />
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and glass aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-wobble-timing` | `0.8s` | The total duration of the wobble animation triggered on focus. |
| `--ease-glass-bg` | `rgba(255, 255, 255, 0.15)` | Semi-transparent white for the frosted glass background. |
| `--ease-glass-border`| `rgba(255, 255, 255, 0.3)` | Slightly more opaque white for crisp edges. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript interaction observers by utilizing the CSS `:target` pseudo-class for state and the `:focus-within` pseudo-class for contextual micro-interactions. The "wobble" effect uses a complex `@keyframes` sequence interpolating both `transform: translateX` and `rotate` properties to create a physical-feeling reaction. This provides an engaging, 60fps micro-interaction that makes forms feel responsive and alive, executed entirely in CSS.

---

> **Note:** PR modifies only files inside `submissions/examples/css-wobble-focus-modal-for-glassmorphism-ui-layouts-realtushartyagi-34071/`.
