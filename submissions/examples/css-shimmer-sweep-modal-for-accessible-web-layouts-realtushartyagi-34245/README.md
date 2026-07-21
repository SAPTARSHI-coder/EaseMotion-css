# CSS Shimmer Sweep Modal for Accessible Web Layouts

A pure CSS modal component featuring an elegant shimmer sweep over the background, designed specifically with strict **Accessibility** (A11y) standards in mind (high contrast, clear focus rings, large touch targets, and motion sensitivity support).

## Files
- `style.css` – Contains all the EaseMotion CSS variables, the `:target` trigger mechanics, the keyframe animation for the shimmer sweep, and `prefers-reduced-motion` media queries.
- `demo.html` – A standalone HTML file demonstrating the modal functionality, ARIA properties, and accessible markup.

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
<a href="#a11y-modal" class="ease-a11y-trigger-btn" aria-label="Open modal">Open</a>

<!-- Modal Overlay & Content -->
<div id="a11y-modal" class="ease-a11y-shimmer-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="ease-a11y-shimmer-modal-content">
    <a href="#" class="ease-a11y-shimmer-modal-close" aria-label="Close modal">&times;</a>
    <h2 id="modal-title">Accessible Content</h2>
    <p>Modal content goes here...</p>
  </div>
</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and shimmer speed via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-modal-transition` | `0.3s` | The speed of the modal overlay fade and content entrance. |
| `--ease-shimmer-duration` | `3s` | The speed of the continuous shimmer sweep loop. |
| `--ease-a11y-focus-ring` | `#005fcc` | High contrast color for `:focus-visible` outlines. |

## Why it fits EaseMotion CSS & Web Accessibility
This component perfectly aligns with the **zero JavaScript overhead** philosophy while strictly adhering to WCAG guidelines:
1. **No JavaScript required:** State is managed via CSS `:target`.
2. **Keyboard Navigation:** Uses bold, high-contrast `:focus-visible` outlines instead of relying on default browser styling.
3. **Touch Targets:** The close button is sized at a minimum of `48x48px` to ensure mobile tap accessibility.
4. **Reduced Motion:** If a user has `prefers-reduced-motion` enabled in their OS, the CSS automatically strips away the `translateY` entrance animation and entirely disables the shimmer sweep loop, leaving a simple, instant fade-in.

---

> **Note:** PR modifies only files inside `submissions/examples/css-shimmer-sweep-modal-for-accessible-web-layouts-realtushartyagi-34245/`.
