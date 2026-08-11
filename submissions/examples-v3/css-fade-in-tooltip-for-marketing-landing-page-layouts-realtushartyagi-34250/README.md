# CSS Fade-In Tooltip for Marketing Landing Page Layouts

A pure CSS tooltip component featuring a playful, bouncy fade-in and scale transition, styled specifically for high-conversion **Marketing Landing Page** aesthetics (vibrant gradients, large soft shadows, pill-shaped borders).

## Files
- `style.css` – Contains all the EaseMotion CSS variables, wrapper mechanics, and the bouncy `cubic-bezier` tooltip transition styles.
- `demo.html` – A standalone HTML file demonstrating the tooltip attached to a prominent CTA button.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
Wrap your trigger element (e.g., a CTA button) and the tooltip content inside a container with the `.ease-mk-tooltip-wrapper` class.

```html
<div class="ease-mk-tooltip-wrapper">
  <!-- Trigger Element -->
  <button class="ease-mk-cta" aria-describedby="marketing-tooltip">
    Start Free Trial
  </button>
  
  <!-- Tooltip Element -->
  <div id="marketing-tooltip" class="ease-mk-tooltip-content" role="tooltip">
    ✨ No credit card required
  </div>
</div>
```

## CSS Custom Properties
You can easily adjust the animation timing and offset by overriding the CSS variables defined in `:root`:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tt-transition-duration` | `0.4s` | The speed of the fade, slide, and scale transition. |
| `--ease-tt-transition-easing` | `cubic-bezier(...)` | A spring-like easing curve for a playful, bouncy entrance. |
| `--ease-tt-offset-y` | `-12px` | How far the tooltip translates vertically upon hover. |

## Why it fits EaseMotion CSS
This component adheres to the **zero JavaScript overhead** philosophy of EaseMotion CSS. The interactive states (`:hover`, `:focus-within`) on the wrapper gracefully trigger the `opacity`, `visibility`, and `transform` (scale and translate) CSS properties on the tooltip content, providing a 60fps, highly performant micro-interaction without any event listeners.

## Accessibility
The implementation utilizes standard ARIA attributes (`aria-describedby`, `role="tooltip"`) and respects keyboard navigation via the `:focus-within` pseudo-class, crucial for inclusive marketing sites.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-in-tooltip-for-marketing-landing-page-layouts-realtushartyagi-34250/`.
