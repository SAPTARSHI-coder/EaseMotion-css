# CSS Tada-Click Popover for Accessible Web Layouts

A pure CSS animated popover designed from the ground up for strict web accessibility. It utilizes an engaging "Tada" entrance animation triggered upon click/focus while prioritizing high contrast, clear focus indicators, large typography, and robust compliance with WCAG principles.

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the native `:focus-within` pseudoclass for a seamless, accessible click-to-open and click-off-to-close behavior that naturally supports keyboard navigation.
- **Accessibility-First Aesthetics (WCAG AAA)**: 
  - Ultra-high contrast text and borders (`#1a1a1a` on `#ffffff`).
  - Clear and unmistakable focus rings (`outline: 4px solid #d93800;`) on all interactive elements.
  - Hover states are supplemented with clear text underlines, rather than relying solely on color changes.
  - Large, highly legible base font sizes (`16px`/`18px`) and relaxed line-heights.
- **`prefers-reduced-motion` Support**: Uses CSS media queries to automatically replace the intense "Tada" animation with a subtle, non-distracting fade-in effect for users who have disabled animations in their OS settings.
- **Semantic HTML**: Fully semantic structure utilizing `role="dialog"` and `aria-describedby`/`aria-labelledby` so screen readers correctly announce the popover.
- **Customizable**: Exposes CSS Custom Properties (`var(--ease-...)`) to tweak the underlying animation timing and scaling factors if needed.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="accessible-popover-content">
    View Accessibility Features
  </button>
  
  <!-- Popover Content -->
  <div id="accessible-popover-content" class="ease-tada-popover" role="dialog" aria-labelledby="popover-title">
    <div class="popover-content">
      <h2 id="popover-title">Title</h2>
      <p>Content goes here.</p>
      <button class="btn-primary" aria-label="Close dialog">Understood</button>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tada-timing` | `0.8s` | Total duration of the tada entrance animation |
| `--ease-tada-easing` | `cubic-bezier(...)` | Easing function ensuring an engaging entrance |
| `--ease-tada-rotation` | `4deg` | Maximum rotation angle during the left/right tada sequence |
| `--ease-tada-scale-shrink` | `0.95` | Scale factor during the initial anticipation phase |
| `--ease-tada-scale-grow` | `1.05` | Scale factor during the emphasis phase of the tada |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Seamlessly integrates with system OS accessibility preferences (Reduced Motion).

## Demo

Open `demo.html` in your browser to view a live showcase of the component. Test it with your keyboard by using `Tab` and `Enter/Space` to interact.
