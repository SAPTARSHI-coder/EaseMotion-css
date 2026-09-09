# feat(examples): Add pure CSS advanced component iteration 127

A rich, fully responsive pure CSS interactive component for the EaseMotion-css library.

## Preview

Open `demo.html` in any modern browser to see the component in action.

## Features

- Neon glow button group (purple, cyan, green) with hover light effects
- Statistics panel with animated fill bars using CSS custom properties
- Pure CSS morphing blob loader with keyframe animation
- CSS-only tab component using radio inputs (zero JavaScript)
- Animated floating tag cloud with staggered delays
- Full dark mode by default
- Responsive grid layout with `auto-fit` and `minmax`
- Accessible HTML5 markup throughout

## Files

| File | Description |
|------|-------------|
| `demo.html` | Interactive demonstration page |
| `style.css` | All component styles |
| `README.md` | This documentation file |

## Usage

```html
<link rel="stylesheet" href="style.css">

<!-- Neon Button -->
<button class="ease-btn ease-btn--neon-purple">Launch</button>

<!-- Stat Card -->
<div class="ease-stat ease-stat--blue">
  <span class="ease-stat__value">24.8K</span>
  <span class="ease-stat__label">Stars</span>
  <div class="ease-stat__bar" style="--pct:82%"></div>
</div>

<!-- Tag -->
<span class="ease-tag ease-tag--1">CSS Grid</span>
```

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |

## Contributing

Please follow the [EaseMotion contribution guidelines](../../CONTRIBUTING.md) when submitting changes.
