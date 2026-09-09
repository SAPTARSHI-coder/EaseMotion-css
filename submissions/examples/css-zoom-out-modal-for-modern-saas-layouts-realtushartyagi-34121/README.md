# CSS Zoom-Out Modal for Modern SaaS Layouts

A pure CSS modal component featuring a subtle, depth-enhancing "zoom-out" entrance animation, styled specifically for clean, functional **Modern SaaS** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, and the `transform` logic utilizing a `scale` transition to create the zoom-out effect.
- `demo.html` – A standalone HTML file demonstrating the modal functionality in a typical SaaS settings/invite layout.

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
<a href="#invite-modal" class="ease-zoom-trigger-btn">Send Invite</a>

<!-- Modal Overlay & Animated Content -->
<div id="invite-modal" class="ease-zoom-saas-modal-overlay">
  <div class="ease-zoom-saas-modal-content">
    <a href="#" class="ease-zoom-saas-modal-close">&times;</a>
    <h2>Share Workspace</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and SaaS styling variables via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-zoom-initial-scale` | `1.15` | The initial scale size of the modal before it zooms out to `1`. |
| `--ease-zoom-transition` | `0.35s` | The total duration of the modal's zoom-out entrance animation. |
| `--ease-zoom-easing`| `cubic-bezier(0.2, 0.8, 0.2, 1)` | A smooth decelerating cubic-bezier for a fluid zoom effect. |
| `--ease-saas-accent` | `#3b82f6` | The modern blue accent color for buttons and active states. |

## Why it fits EaseMotion CSS
This component completely replaces the need for JavaScript state management by utilizing the CSS `:target` pseudo-class for interactivity. The "zoom-out" effect uses hardware-accelerated `transform` properties (`scale`) coupled with a custom `cubic-bezier` timing function. This creates a spatially rich, 60fps micro-interaction that provides a premium, responsive feel to SaaS interfaces without bloating the DOM or utilizing JS animation libraries.

---

> **Note:** PR modifies only files inside `submissions/examples/css-zoom-out-modal-for-modern-saas-layouts-realtushartyagi-34121/`.
