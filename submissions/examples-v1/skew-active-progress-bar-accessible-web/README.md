# CSS Skew-Active Progress Bar — Accessible Web Layout

A pure CSS progress bar where the fill bar slides in at a skewed angle and straightens as it settles, giving active-state motion a strong, non-color-dependent visual cue.

## CSS Custom Properties

| Property                        | Default    | Description                        |
|------------------------------------|--------------|----------------------------------------|
| `--ease-progress-skew-duration`  | `0.6s`        | Duration of the fill/skew transition   |
| `--ease-progress-skew-easing`    | `ease-out`    | Easing curve for the transition        |
| `--ease-progress-skew-angle`     | `-8deg`       | Initial skew angle of the fill bar     |
| `--ease-progress-track-bg`       | `#e5e7eb`     | Track background color                 |
| `--ease-progress-fill-bg`        | `#1d4ed8`     | Fill bar color                          |
| `--ease-progress-height`         | `20px`        | Bar height                              |
| `--ease-progress-radius`         | `6px`         | Corner radius                           |

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress__label">
    <span>Upload Progress</span>
    <span>65%</span>
  </div>
  <div class="ease-progress__track" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
    <div class="ease-progress__fill" style="width: 65%;"></div>
  </div>
</div>
```

Add the `is-settled` class to `.ease-progress__fill` (after mount) to trigger the skew-to-straight transition.

## Accessibility

- Uses `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax`/`aria-label` for screen reader support.
- Bold 2px border on the track ensures the bar is visible without relying on color contrast alone.
- `prefers-reduced-motion: reduce` disables the skew transform, keeping only a simple width transition.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing/skew angle via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy. The minimal JS included only toggles the settle class once — not the animation itself.
