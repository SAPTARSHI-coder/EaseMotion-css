# CSS Tada-Click Popover for Marketing Landing Pages

A pure CSS animated popover featuring an attention-grabbing "Tada" entrance animation triggered upon click/focus. Designed for Marketing Landing Pages, this component is perfect for newsletter signups, special offers, and prominent calls to action. It uses vibrant aesthetics, rounded elements, and pronounced box shadows to drive conversions.

## Features

- **Pure CSS Interaction**: No JavaScript required. Uses the `:focus-within` pseudoclass for a seamless click-to-open interaction. This also allows the popover to stay open naturally while the user interacts with inputs inside it.
- **Marketing Aesthetics**: Designed to grab attention with vibrant gradients, large readable typography (`Outfit`), high-contrast pill buttons, and soft, wide box shadows.
- **Accessible Design**: Fully supports keyboard navigation. Users can Tab to the trigger button, press Enter or Space to reveal the popover, and interact with the form elements. It utilizes proper ARIA attributes (`role="dialog"`, `aria-labelledby`).
- **Fully Customizable**: Exposes CSS Custom Properties (`var(--ease-...)`) to easily control the animation duration, scaling factors, and the rotation angle for the Tada effect to perfectly match your brand's voice.
- **Responsive Form Ready**: Contains an embedded form layout that scales beautifully down to mobile devices without overflowing.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="marketing-offer-popover">
    Unlock Special Offer 🎁
  </button>
  
  <!-- Popover Content -->
  <div id="marketing-offer-popover" class="ease-tada-popover" role="dialog">
    <div class="popover-content">
      <div class="badge">Limited Time</div>
      <h3>Take 20% Off</h3>
      <p>Content goes here.</p>
      
      <!-- Embedded Form -->
      <div class="popover-form">
        <input type="email" placeholder="Enter your email address" class="offer-input">
        <button class="btn-claim">Claim My 20% Off</button>
      </div>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-tada-timing` | `0.9s` | Total duration of the tada entrance animation |
| `--ease-tada-easing` | `cubic-bezier(...)` | Easing function ensuring an energetic entrance |
| `--ease-tada-rotation` | `5deg` | Maximum rotation angle during the left/right tada sequence |
| `--ease-tada-scale-shrink` | `0.92` | Scale factor during the initial anticipation phase |
| `--ease-tada-scale-grow` | `1.1` | Scale factor during the emphasis phase of the tada |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Uses system fonts (`Outfit`, `system-ui`) gracefully for native-feeling performance on all operating systems.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component.
