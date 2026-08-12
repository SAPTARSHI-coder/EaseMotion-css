# CSS Jello-Hover Modal for Glassmorphism UI Layouts

A pure CSS animated modal component featuring a smooth, elastic Jello-Hover interaction transition. The design is optimized to fit seamlessly into Glassmorphism UI aesthetics with customizable translucent properties.

## Features

- **Pure CSS**: Zero Javascript required. Works via CSS `:target` pseudo-class overlay technique.
- **Glassmorphism Design**: Rich backdrop-blurs, translucent border elements, and responsive typography.
- **Elastic Jello Wobble**: A modern, playful micro-interaction when hovering over the active modal container.
- **Customizable**: Exposes custom CSS properties for duration, easing, scale factors, and glassmorphism styling.
- **Accessible**: Works with keyboard navigation, supports high-contrast modes, and honors `prefers-reduced-motion`.

## Exposed CSS Custom Properties

Configure the modal properties globally on `:root` or locally on a container element:

```css
:root {
  /* Animation Timing & Easing */
  --ease-modal-jello-duration: 0.65s;
  --ease-modal-jello-easing: ease-in-out;

  /* Scale and Skew Coefficients per Keyframe */
  --ease-modal-jello-s1-x: 1.12;
  --ease-modal-jello-s1-y: 0.88;
  --ease-modal-jello-sk1: -6deg;
  --ease-modal-jello-s2-x: 0.92;
  --ease-modal-jello-s2-y: 1.08;
  --ease-modal-jello-sk2: 3deg;
  --ease-modal-jello-s3-x: 1.06;
  --ease-modal-jello-s3-y: 0.94;
  --ease-modal-jello-sk3: -1.5deg;
  --ease-modal-jello-s4-x: 0.98;
  --ease-modal-jello-s4-y: 1.02;
  --ease-modal-jello-sk4: 0.75deg;

  /* Glassmorphism Styles */
  --ease-modal-glass-blur: 16px;
  --ease-modal-glass-bg: rgba(255, 255, 255, 0.12);
  --ease-modal-glass-border: rgba(255, 255, 255, 0.20);
}
```

## HTML Structure

```html
<a href="#modal-id" class="ease-btn">Open Glassmorphic Modal</a>

<div id="modal-id" class="ease-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <!-- Close backdrop for clicking outside -->
  <a href="#" class="ease-modal-overlay-close-link" aria-label="Close modal"></a>
  
  <div class="ease-modal ease-modal-jello ease-modal-glass">
    <div class="ease-modal-header">
      <h2 id="modal-title">Modal Title</h2>
      <a href="#" class="ease-modal-close" aria-label="Close modal">&times;</a>
    </div>
    <div class="ease-modal-body">
      <p>Your modal body content here.</p>
    </div>
    <div class="ease-modal-footer">
      <a href="#" class="ease-btn">Cancel</a>
      <a href="#" class="ease-btn ease-btn-primary">Confirm</a>
    </div>
  </div>
</div>
```
