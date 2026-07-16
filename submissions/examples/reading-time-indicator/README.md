# Reading Time Indicator

A modern CSS-only reading progress component for EaseMotion CSS. This component provides premium reading progress bars, percentage badges, and estimated reading time displays for blogs, docs, developer portals, and editorial pages.

## Features

- Sticky top progress bar
- Animated progress indicator
- Reading percentage badge
- Estimated reading time display
- Responsive layout
- Modern shadows and typography
- Zero JavaScript required
- Customizable using CSS variables

## Available classes

- `ease-reading-progress`
- `ease-reading-bar`
- `ease-reading-time`
- `ease-reading-percentage`

## Variants

- `ease-reading-dark`
- `ease-reading-glass`
- `ease-reading-minimal`
- `ease-reading-pill`
- `ease-reading-floating`

## CSS variable customization

The component can be themed with the following CSS variables:

- `--ease-reading-height`
- `--ease-reading-bg`
- `--ease-reading-fill`
- `--ease-reading-radius`
- `--ease-reading-shadow`
- `--ease-reading-duration`
- `--ease-reading-transition`
- `--ease-reading-text`

### Example override

```css
.ease-reading-progress {
  --ease-reading-fill: linear-gradient(90deg, #38bdf8, #8b5cf6);
  --ease-reading-bg: rgba(15, 23, 42, 0.08);
  --ease-reading-radius: 999px;
}
```

## Example usage

```html
<div class="ease-reading-progress sticky ease-reading-pill" style="--ease-reading-progress: 55%;">
  <div class="ease-reading-bar"></div>
  <span class="ease-reading-time">5 min read</span>
  <span class="ease-reading-percentage">55%</span>
</div>
```

```html
<div class="ease-reading-progress ease-reading-minimal" style="--ease-reading-progress: 40%;">
  <div class="ease-reading-bar"></div>
</div>
```

## Browser compatibility

- Designed for modern browsers with CSS custom properties and transitions
- Provides graceful fallback when reduced motion is preferred
- Works in Chrome, Safari, Firefox, and Edge

## Accessibility

- High contrast-friendly default colors
- Focus is preserved for keyboard users on the page content
- Reduced motion support removes animation when preferred
- Responsive sizing keeps the component readable across screen sizes
