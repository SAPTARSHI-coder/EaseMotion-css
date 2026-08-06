# CSS Shimmer Sweep Popover

A pure CSS animated Popover component utilizing a smooth Shimmer Sweep interaction transition, designed to complement Marketing Landing Page interface aesthetics.

## Features

- Pure CSS shimmer sweep animation on popover reveal
- Zero JavaScript overhead
- Fully responsive across all screen sizes
- Keyboard accessible with visible focus states
- Exposes custom parameters via CSS custom properties
- Multiple alignment variants (default, right, center)
- Support for `prefers-reduced-motion`
- Backdrop blur and glass-morphism styling

## How It Works

The component uses CSS `:hover` and `:focus-within` pseudo-classes to toggle popover visibility without JavaScript.

A CSS pseudo-layer creates the shimmer sweep effect that plays once when the popover appears, using the `ease-shimmer-sweep` keyframe animation.

The shimmer highlight travels across the popover panel with a skewed gradient, creating a premium marketing feel.

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-primary` | `#6366f1` | Primary accent color |
| `--ease-shimmer-highlight` | `rgba(255, 255, 255, 0.6)` | Shimmer highlight color |
| `--ease-shimmer-width` | `50%` | Width of the shimmer overlay |
| `--ease-duration-shimmer` | `1.6s` | Duration of the shimmer sweep |
| `--ease-popover-offset` | `12px` | Gap between trigger and popover |
| `--ease-popover-radius` | `12px` | Border radius of the popover |
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default easing function |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce easing function |

## Files

- `demo.html` — Live demonstration with three popover variants (Feature, Pricing, CTA)
- `style.css` — Component styles, shimmer animation, and custom properties
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
    <div class="popover-shimmer" aria-hidden="true"></div>
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
- `aria-hidden="true"` on decorative shimmer and arrow elements
- Native keyboard focus interaction via `:focus-visible`
- Visible focus indicators on all interactive elements
- Respects `prefers-reduced-motion` media query

## Browser Support

Works in modern browsers that support:
- CSS custom properties (variables)
- CSS `backdrop-filter`
- CSS `:focus-within` selector
- CSS `isolation` property