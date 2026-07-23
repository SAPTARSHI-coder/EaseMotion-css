# CSS Tada-Click Popover for Minimalist Tech

A pure CSS animated popover featuring a quick, subtle "Tada" entrance animation triggered on click/focus. Designed for Minimalist Tech interfaces (like Vercel, Linear, or GitHub), this component uses high contrast typography, crisp borders, and very restrained box shadows to maintain a clean, utility-first feel.

## Features

- **Pure CSS Interaction**: No JavaScript required. Relies on the `:focus-within` pseudoclass for a seamless click-to-open and click-off-to-close behavior.
- **Minimalist Tech Aesthetics**: Focuses on readability and precision. Uses system font stacks, stark contrasting colors, and minimalistic grid/line background patterns.
- **Accessible Design**: Fully supports native keyboard navigation. Users can Tab to the trigger button and press Enter or Space to reveal the popover. Built with semantic tags and proper ARIA attributes (`role="dialog"`, `aria-labelledby`).
- **Subtle Animations**: Exposes CSS Custom Properties (`var(--ease-...)`). By default, the Tada effect is tightened (`2deg` rotation, `0.5s` duration) to feel more like a snappy structural reveal than a bouncy cartoon animation.
- **Fully Responsive**: Scales cleanly on mobile viewports.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="tech-popover-content">
    Copy API Key
  </button>
  
  <!-- Popover Content -->
  <div id="tech-popover-content" class="ease-tada-popover" role="dialog">
    <div class="popover-content">
      <div class="popover-header">
        <svg class="success-icon" viewBox="0 0 24 24">...</svg>
        <h3>Copied to clipboard</h3>
      </div>
      <p>Your production API key has been securely copied.</p>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tada-timing` | `0.5s` | Total duration of the tada entrance animation (faster for tech) |
| `--ease-tada-easing` | `cubic-bezier(...)` | Easing function ensuring a crisp entrance |
| `--ease-tada-rotation` | `2deg` | Maximum rotation angle (kept very subtle for minimal UI) |
| `--ease-tada-scale-shrink` | `0.96` | Scale factor during the initial anticipation phase |
| `--ease-tada-scale-grow` | `1.04` | Scale factor during the emphasis phase of the tada |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Inherits system fonts (`-apple-system`, `BlinkMacSystemFont`, etc.) gracefully for native-feeling typography on Windows, macOS, and Linux.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component.
