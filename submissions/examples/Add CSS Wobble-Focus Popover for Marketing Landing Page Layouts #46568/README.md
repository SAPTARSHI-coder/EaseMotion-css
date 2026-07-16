# CSS Wobble-Focus Popover for Marketing Landing Pages

A pure CSS animated popover that utilizes an engaging "Wobble" entrance animation triggered upon click/focus. Styled specifically for Marketing Landing Pages, this component is designed to grab attention with vibrant colors, large readable typography (`Outfit`), and soft, wide box shadows—perfect for capturing newsletter signups or waitlist entries.

## Features

- **Pure CSS Interaction**: No JavaScript required. Relies natively on the `:focus-within` pseudoclass for a seamless click-to-open interaction. This also allows the popover to remain open while the user interacts with the input field inside it.
- **Marketing Aesthetics**: Designed for high conversions. Features a vibrant purple gradient trigger button, pill-shaped borders, deep soft drop shadows (`0 25px 50px -12px`), and high-contrast internal CTA buttons.
- **Accessible Design**: Fully supports native keyboard navigation. Users can Tab to the trigger button, press Enter or Space to reveal the popover, and interact directly with the form elements. It utilizes proper ARIA attributes (`role="dialog"`, `aria-labelledby`).
- **Engaging Wobble Animation**: Exposes CSS Custom Properties (`var(--ease-...)`). The wobble animation (`@keyframes ease-wobble-focus`) is slightly pronounced (14px distance, 5deg rotation) to actively draw the user's eye to the newly revealed form without feeling chaotic.
- **Fully Responsive**: Contains an embedded form layout that scales beautifully down to mobile devices without overflowing the viewport.

## Quick Start

1. Import the CSS from `style.css` into your project.
2. Structure your HTML to wrap the trigger element and the popover inside a `.popover-wrapper` container.

```html
<div class="popover-wrapper">
  <!-- Trigger Element -->
  <button class="trigger-btn" aria-describedby="marketing-wobble-popover">
    Join the Waitlist ✨
  </button>
  
  <!-- Popover Content -->
  <div id="marketing-wobble-popover" class="ease-wobble-popover" role="dialog">
    <div class="popover-content">
      <h3 id="popover-title">You're almost in!</h3>
      <p>Drop your email below.</p>
      
      <!-- Embedded Form -->
      <div class="popover-form">
        <input type="email" placeholder="hello@example.com" class="waitlist-input">
        <button class="submit-btn">Reserve My Spot</button>
      </div>
    </div>
  </div>
</div>
```

## Customization Parameters

The animation and styling can be fully customized by overriding the CSS variables defined in the `:root` pseudo-class.

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-wobble-timing` | `0.9s` | Total duration of the wobble entrance animation |
| `--ease-wobble-easing` | `cubic-bezier(...)` | Easing function ensuring a lively entrance |
| `--ease-wobble-distance` | `14px` | Maximum pixel distance to translate left/right during the wobble |
| `--ease-wobble-rotation` | `5deg` | Maximum rotation angle paired with the translation |

## Browser Support

- Chrome, Edge, Safari, Firefox (Recent Versions)
- Inherits `Outfit` (via Google Fonts) combined with system fonts for crisp, modern typography across all operating systems.

## Demo

Open `demo.html` in your browser to view a live, interactive showcase of the component nested inside a marketing layout.
