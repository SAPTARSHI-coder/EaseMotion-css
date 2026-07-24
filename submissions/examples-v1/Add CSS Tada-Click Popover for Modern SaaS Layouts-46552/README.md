# CSS Tada-Click Popover for Modern SaaS

A pure CSS animated popover featuring a playful yet professional "Tada" entrance animation triggered upon click/focus. Designed specifically for Modern SaaS interfaces, this component uses clean aesthetics, soft box shadows, and distinct interactive buttons.

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the `:focus-within` pseudoclass for a seamless click-to-open and click-off-to-close interaction.
- **Modern SaaS Aesthetics**: Clean light-mode design with clear typography, soft drop shadows, and styled primary/secondary internal buttons.
- **Accessible Design**: Works flawlessly with keyboard navigation. Users can Tab to the trigger, press Enter or Space to open the popover, and interact with elements inside. Proper ARIA attributes (`role="dialog"`, `aria-labelledby`) are utilized.
- **Extensively Customizable**: Exposes CSS Custom Properties (`var(--ease-...)`) to easily control the animation timing, scale factors, and the rotation angle for the Tada effect.
- **Responsive**: Ensures proper constraints so the popover doesn't overflow smaller screens.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="tada-popover-content">
    New Integration
  </button>
  
  <!-- Popover Content -->
  <div id="tada-popover-content" class="ease-tada-popover" role="dialog">
    <div class="popover-content">
      <h3>Title</h3>
      <p>Content goes here.</p>
      <div class="popover-actions">
        <button class="btn-secondary">Dismiss</button>
        <button class="btn-primary">View Settings</button>
      </div>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tada-timing` | `0.8s` | Total duration of the tada entrance animation |
| `--ease-tada-easing` | `cubic-bezier(...)` | Easing function ensuring a lively entrance |
| `--ease-tada-rotation` | `3deg` | Maximum rotation angle during the left/right tada sequence |
| `--ease-tada-scale-shrink` | `0.95` | Scale factor during the initial anticipation phase |
| `--ease-tada-scale-grow` | `1.05` | Scale factor during the emphasis phase of the tada |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Inherits system fonts (`Inter`, `system-ui`) gracefully for native-feeling performance on all operating systems.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component.
