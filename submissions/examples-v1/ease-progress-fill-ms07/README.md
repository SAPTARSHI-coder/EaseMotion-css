# ease-progress-fill

A reusable CSS utility that animates a progress bar smoothly from 0% to
its target width. Pure CSS, zero JavaScript.

## Use cases

- Skill bars
- File upload progress
- Dashboard statistics
- Loading indicators
- Portfolio sections

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Simple two-part markup: a track (`ease-progress-fill`) and a fill
     (`progress-bar`)
- ✅ Target width, duration, easing, height, and colors exposed as CSS
     custom properties
- ✅ Size modifiers (`--sm`, `--lg`) for different contexts
- ✅ Respects `prefers-reduced-motion`
- ✅ No external dependencies
- ✅ Fully responsive

## Files

```
ease-progress-fill/
├── demo.html   # Standalone demo across skill bars, uploads, dashboards
├── style.css   # The utility classes and demo page styles
└── README.md   # This file
```

## Usage

Include `style.css`, then set the `--epf-target` custom property to the
percentage you want the bar to fill to:

```html
<div class="ease-progress-fill" style="--epf-target: 75%;">
  <div class="progress-bar"></div>
</div>
```

On page load, the inner `.progress-bar` animates its width from `0%` to
the value of `--epf-target` and stays there (`animation-fill-mode:
forwards`).

### Size modifiers

```html
<div class="ease-progress-fill ease-progress-fill--sm" style="--epf-target: 40%;">
  <div class="progress-bar"></div>
</div>

<div class="ease-progress-fill ease-progress-fill--lg" style="--epf-target: 90%;">
  <div class="progress-bar"></div>
</div>
```

| Class                          | Track height |
|-----------------------------------|----------------|
| `ease-progress-fill` (default)   | `10px`       |
| `ease-progress-fill--sm`         | `6px`        |
| `ease-progress-fill--lg`         | `16px`       |

## Customization

All values are CSS custom properties, overridable globally on `:root` or
per-instance via inline `style`:

```html
<div
  class="ease-progress-fill"
  style="--epf-target: 62%; --epf-duration: 2s; --epf-fill-color: #34a853;"
>
  <div class="progress-bar"></div>
</div>
```

| Variable              | Default    | Description                                |
|-------------------------|--------------|-------------------------------------------------|
| `--epf-target`         | `75%`      | Final width the bar animates to                  |
| `--epf-duration`       | `1.2s`     | Duration of the fill animation                   |
| `--epf-easing`         | `ease`     | Animation easing curve                           |
| `--epf-track-color`    | `#e5e7eb`  | Background color of the track                    |
| `--epf-fill-color`     | `#007bff`  | Color of the animated fill                       |
| `--epf-height`         | `10px`     | Height of the track and fill                     |
| `--epf-radius`         | `999px`    | Corner radius of the track and fill              |

## Accessibility

- The animation only affects the `width` of the fill element; it never
  changes the size or position of surrounding content.
- Under `prefers-reduced-motion: reduce`, the animation is skipped
  entirely and the bar renders directly at its target width.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties and `@keyframes` — no vendor prefixes
required for modern browsers.

## Checklist

- [x] Pure CSS implementation
- [x] Animates smoothly from 0% to target width
- [x] Reusable across skill bars, uploads, dashboards, loaders, portfolios
- [x] Exposes timing/color/height via CSS custom properties
- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Submitted inside `submissions/` only