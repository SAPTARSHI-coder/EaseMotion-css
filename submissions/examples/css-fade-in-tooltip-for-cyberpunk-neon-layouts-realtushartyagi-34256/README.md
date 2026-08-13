# CSS Fade-In Tooltip for Cyberpunk Neon Layouts

A pure CSS tooltip component featuring a smooth fade-in and slide-up transition, styled specifically for **Cyberpunk Neon** interface aesthetics.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, wrapper mechanics, and the glowing neon tooltip transition styles.
- `demo.html` – A standalone HTML file demonstrating the tooltip with a cyberpunk button trigger.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
Wrap your trigger element (e.g., a button) and the tooltip content inside a container with the `.ease-tooltip-wrapper` class.

```html
<div class="ease-tooltip-wrapper">
  <!-- Trigger Element -->
  <button class="ease-cp-btn" aria-describedby="my-tooltip">
    Hover Me
  </button>
  
  <!-- Tooltip Element -->
  <div id="my-tooltip" class="ease-tooltip-content" role="tooltip">
    System Online
  </div>
</div>
```

## CSS Custom Properties
You can easily adjust the animation timing and offset by overriding the CSS variables defined in `:root`:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tt-transition-duration` | `0.3s` | The speed of the fade and slide transition. |
| `--ease-tt-transition-easing` | `cubic-bezier(...)` | The timing function for the transition. |
| `--ease-tt-offset-y` | `-10px` | How far the tooltip translates vertically upon hover. |

## Why it fits EaseMotion CSS
This component adheres to the **zero JavaScript overhead** philosophy of EaseMotion CSS. The interactive states (`:hover`, `:focus-within`) on the wrapper gracefully trigger the `opacity`, `visibility`, and `transform` CSS properties on the tooltip content, providing a 60fps, performant micro-interaction without any event listeners.

## Accessibility
The implementation utilizes standard ARIA attributes (`aria-describedby`, `role="tooltip"`) and respects keyboard navigation via the `:focus-within` pseudo-class.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-in-tooltip-for-cyberpunk-neon-layouts-realtushartyagi-34256/`.
