# Google-style Loading Animation

A pure CSS loading animation inspired by Google's design language. Combines
a 4-dot bouncing wave rendered in Google's signature colors with an
indeterminate multi-color gradient progress bar and a pulsing "Loading"
label.

## Preview

The component includes three visual elements that can be used together or
independently:

1. **Dot Wave** — four dots (Blue, Red, Yellow, Green) that bounce in a
   staggered sequence, creating a wave effect.
2. **Progress Bar** — an indeterminate bar with a sliding, shifting
   multi-color gradient fill.
3. **Loading Label** — "Loading" text with an animated ellipsis that fills
   in over time.

## Features

- ✅ Pure CSS implementation — no JavaScript required
- ✅ Staggered animation delays via the CSS custom property `--ldp-i`
- ✅ Smooth `@keyframes` animations for dots, progress bar, and ellipsis
- ✅ Fully responsive layout
- ✅ Dark-theme optimized color palette
- ✅ Respects `prefers-reduced-motion` for accessibility
- ✅ No external dependencies
- ✅ Easy to customize via CSS custom properties

## Files

```
google-style-loading-animation/
├── demo.html   # Standalone demo page showcasing all variants
├── style.css   # Component styles and animations
└── README.md   # This file
```

## Usage

Include `style.css` and drop the markup below wherever you need a loading
state:

```html
<div class="ldp-container">
  <div class="ldp-dot-wave" role="status" aria-label="Loading">
    <span class="ldp-dot ldp-dot--blue"   style="--ldp-i:0;"></span>
    <span class="ldp-dot ldp-dot--red"    style="--ldp-i:1;"></span>
    <span class="ldp-dot ldp-dot--yellow" style="--ldp-i:2;"></span>
    <span class="ldp-dot ldp-dot--green"  style="--ldp-i:3;"></span>
  </div>

  <div class="ldp-progress" aria-hidden="true">
    <div class="ldp-progress__track">
      <div class="ldp-progress__fill"></div>
    </div>
  </div>

  <p class="ldp-label">Loading</p>
</div>
```

### Using individual pieces

Each block is independent — use only the dot wave, only the progress bar,
or only the label, by including just that markup fragment.

### Compact variant

Add the `ldp-dot-wave--sm` and `ldp-label--sm` modifier classes for a
smaller footprint, e.g. inline within a button or card:

```html
<div class="ldp-dot-wave ldp-dot-wave--sm">
  <span class="ldp-dot ldp-dot--blue"   style="--ldp-i:0;"></span>
  <span class="ldp-dot ldp-dot--red"    style="--ldp-i:1;"></span>
  <span class="ldp-dot ldp-dot--yellow" style="--ldp-i:2;"></span>
  <span class="ldp-dot ldp-dot--green"  style="--ldp-i:3;"></span>
</div>
```

## Customization

All key values are exposed as CSS custom properties on `:root`, so the
animation can be retuned without touching the keyframes:

| Variable              | Default   | Description                          |
|------------------------|-----------|---------------------------------------|
| `--ldp-blue`           | `#4285f4` | Dot / gradient color                 |
| `--ldp-red`            | `#ea4335` | Dot / gradient color                 |
| `--ldp-yellow`         | `#fbbc05` | Dot / gradient color                 |
| `--ldp-green`          | `#34a853` | Dot / gradient color                 |
| `--ldp-dot-size`       | `14px`    | Diameter of each dot                 |
| `--ldp-dot-gap`        | `10px`    | Spacing between dots                 |
| `--ldp-anim-duration`  | `1.2s`    | Duration of the dot bounce cycle     |
| `--ldp-stagger`        | `0.15s`   | Delay multiplier between dots        |

Example override:

```css
:root {
  --ldp-dot-size: 10px;
  --ldp-anim-duration: 0.9s;
}
```

## Accessibility

- The dot wave uses `role="status"` with `aria-label="Loading"` so screen
  readers announce the loading state.
- All animations are disabled (reduced to a single, near-instant frame) when
  the user's system has `prefers-reduced-motion: reduce` set.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Relies on standard CSS custom properties, `@keyframes`, and `steps()` easing
— no vendor prefixes required for modern browsers.

## Checklist

- [x] Pure CSS implementation
- [x] Responsive design
- [x] Documentation included
- [x] No external dependencies
- [x] Cross-browser compatible