# CSS Spring Physics Popover

A pure CSS animated Popover utilizing a smooth Spring Physics interaction transition, designed to complement Marketing Landing Page interface aesthetics.

## Features

- Pure CSS spring physics animation on popover reveal
- Zero JavaScript overhead
- Fully responsive across all screen sizes
- Keyboard accessible with visible focus states
- Exposes custom parameters via CSS custom properties
- Multiple alignment variants (default, right, center)
- Support for `prefers-reduced-motion`
- Backdrop blur and glass-morphism styling
- Damped spring oscillation effect for natural motion

## How It Works

The component uses CSS `:hover` and `:focus-within` pseudo-classes to toggle popover visibility without JavaScript.

The spring physics effect is achieved using custom CSS cubic-bezier timing functions (`--ease-spring`, `--ease-spring-heavy`, `--ease-spring-gentle`) that simulate damped spring oscillation. When the popover appears, it scales up from a smaller size with a bouncy overshoot, creating a natural spring-like motion.

The popover translates upward while scaling, producing a smooth spring physics interaction that feels organic and engaging.

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-primary` | `#6366f1` | Primary accent color |
| `--ease-spring-stiffness` | `400` | Spring stiffness reference value |
| `--ease-spring-damping` | `15` | Spring damping reference value |
| `--ease-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Primary spring easing function |
| `--ease-spring-heavy` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Heavy spring easing with more bounce |
| `--ease-spring-gentle` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Gentle spring easing |
| `--ease-popover-offset` | `12px` | Gap between trigger and popover |
| `--ease-popover-radius` | `12px` | Border radius of the popover |
| `--ease-popover-scale-start` | `0.3` | Initial scale when popover appears |
| `--ease-popover-scale-end` | `1` | Final scale when popover is visible |
| `--ease-popover-translate-y` | `10px` | Vertical translation offset |
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default easing function |

## Files

- `demo.html` — Live demonstration with three popover variants (Feature, Pricing, CTA)
- `style.css` — Component styles, spring physics animations, and custom properties
- `README.md` — Component documentation

## Usage

Open `demo.html` in a modern web browser to view and interact with the component. Hover over or focus on the trigger buttons to reveal the popovers.

### HTML Structure

```html
<div class="popover-container">
  <button class="popover-trigger" aria-describedby="popover-id">
    Trigger Text
  </button>
  <div id="popover-id" class="popover-panel" role="tooltip">
    <div class="popover-content">
      <!-- Popover content -->
    </div>
    <div class="popover-arrow" aria-hidden="true"></div>
  </div>
</div>
```

## Accessibility

- Uses `role="tooltip"` for popover panels
- `aria-describedby` links trigger to popover content
- `aria-hidden="true"` on decorative arrow elements
- Native keyboard focus interaction via `:focus-within`
- Visible focus indicators on all interactive elements
- Respects `prefers-reduced-motion` media query

## Browser Support

Works in modern browsers that support:
- CSS custom properties (variables)
- CSS `backdrop-filter`
- CSS `:focus-within` selector
- CSS cubic-bezier timing functions
