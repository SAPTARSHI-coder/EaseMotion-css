# CSS 3D Perspective Tilt Modal for Responsive Dashboard Layouts

A pure CSS modal component featuring an elegant, depth-enhancing 3D perspective tilt animation, styled specifically for clean, functional **Responsive Dashboard** aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the 3D transform animations utilizing `perspective`, `rotateX`, `rotateY`, and `translateZ`.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a standard dashboard widget layout.

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
<a href="#dash-modal" class="ease-3d-trigger-btn">Configure</a>

<!-- Modal Overlay & Animated Content -->
<div id="dash-modal" class="ease-3d-tilt-modal-overlay">
  <div class="ease-3d-tilt-modal-content">
    <a href="#" class="ease-3d-tilt-modal-close">&times;</a>
    <h2>Workspace Configuration</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation depth, timing, and dashboard colors via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.5s` | The speed of the modal overlay fade and 3D content entrance (uses a bouncy cubic-bezier). |
| `--ease-modal-perspective`| `1200px` | The 3D perspective depth applied to the overlay container. |
| `--ease-dash-accent` | `#4f46e5` | The primary accent color (indigo) for buttons and active states. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management by relying natively on CSS and the URL hash (`:target`). The 3D tilt effect uses hardware-accelerated `transform` properties (`rotateX`, `rotateY`, `translateZ`, `scale`) coupled with a custom `cubic-bezier` timing function. This creates a spatially rich, 60fps micro-interaction that provides a premium feel to dashboard interfaces without bloating the DOM or utilizing JS animation libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-3d-perspective-tilt-modal-for-responsive-dashboard-layouts-realtushartyagi-34202/`.
