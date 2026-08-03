# CSS Fade-Out Popover for Accessible Web Layouts

A pure CSS animated popover designed from the ground up for strict web accessibility. It utilizes a smooth, deliberate "Fade-Out" interaction transition when dismissed, while prioritizing high contrast, clear focus indicators, large typography, and robust compliance with WCAG principles.

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the native `:focus-within` pseudoclass for a seamless, accessible click-to-open interaction. When focus is lost (clicking outside or tabbing away), the popover executes a smooth CSS transition to fade out naturally.
- **Accessibility-First Aesthetics (WCAG AAA)**: 
  - Ultra-high contrast text and borders (`#1a1a1a` on `#ffffff`).
  - Clear and unmistakable focus rings (`outline: 4px solid #d93800;`) on all interactive elements.
  - Hover states are supplemented with clear text underlines, rather than relying solely on color changes.
  - Large, highly legible base font sizes (`16px`/`18px`) and relaxed line-heights.
- **Smooth Fade Mechanics**: Uses a combination of `@keyframes` for the entrance animation and standard CSS `transition` properties for the exit. This ensures that when the user tabs away, the popover doesn't immediately vanish abruptly, but instead drifts away and fades out.
- **Semantic HTML**: Fully semantic structure utilizing `role="dialog"` and `aria-labelledby` so screen readers correctly announce the popover.
- **Customizable**: Exposes CSS Custom Properties (`var(--ease-...)`) to tweak the underlying animation timing and drift distance.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="fade-popover-content">
    Keyboard Shortcuts
  </button>
  
  <!-- Popover Content -->
  <div id="fade-popover-content" class="ease-fade-popover" role="dialog" aria-labelledby="popover-title">
    <div class="popover-content">
      <h2 id="popover-title">Title</h2>
      <p>Content goes here.</p>
      <button class="btn-primary" aria-label="Close dialog">Got it</button>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-fade-timing` | `0.4s` | Total duration of the fade-in and fade-out animations |
| `--ease-fade-easing` | `cubic-bezier(...)` | Easing function ensuring a smooth drift |
| `--ease-fade-distance` | `12px` | Pixel distance the popover drifts downward while fading out |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Seamlessly integrates with system OS accessibility preferences. Because this is a simple fade, it is naturally safe for users who prefer reduced motion.

## Demo

Open `demo.html` in your browser to view a live showcase of the component. Test it with your keyboard by using `Tab` and `Enter/Space` to interact, and note the smooth exit when tabbing away.
