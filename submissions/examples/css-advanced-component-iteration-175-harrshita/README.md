# feat(examples): Add pure CSS advanced component iteration 175

A rich, fully responsive pure CSS interactive component for the EaseMotion-css library.

## Preview

Open `demo.html` in any modern browser to see the component in action.

## Features

- Glassmorphism card grid with hover lift effects
- Animated progress bars with CSS keyframes
- Pure CSS toggle switch (no JavaScript)
- Responsive CSS Grid layout with named spans
- Floating orb animations with staggered delays
- Full dark mode by default with CSS custom properties
- Responsive typography with `clamp()`
- Accessible markup with semantic HTML5 elements

## Files

| File | Description |
|------|-------------|
| `demo.html` | Interactive demonstration page |
| `style.css` | All component styles |
| `README.md` | This documentation file |

## Usage

```html
<link rel="stylesheet" href="style.css">

<!-- Card Grid -->
<div class="ease-card-grid">
  <div class="ease-card ease-card--primary">...</div>
</div>

<!-- Progress Bar -->
<div class="ease-progress">
  <div class="ease-progress__bar ease-progress__bar--75"></div>
</div>

<!-- Toggle Switch -->
<label class="ease-toggle">
  <input type="checkbox" class="ease-toggle__input">
  <span class="ease-toggle__track"></span>
  <span class="ease-toggle__thumb"></span>
</label>
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
